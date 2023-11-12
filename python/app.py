from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



import cv2
import imutils.contours
import argparse

image = img = cv2.imread("module.jpeg")


parse = argparse.ArgumentParser(description='height measurement')
parse.add_argument("-w", "--width", type=float, required=True,
                    help="width of reference (left)")
args = vars(parse.parse_args())


#grayscale the image, blur by gaussian
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
gray = cv2.GaussianBlur(gray, (7, 7), 0)

#edge detection, close any gaps
canny = cv2.Canny(gray, 50, 100)
canny = cv2.dilate(canny, None, iterations=1)
canny = cv2.erode(canny, None, iterations=1)

#return contours of shapes (left to right) and draw boxes around plant
contours, _ = cv2.findContours(canny, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
if len(contours) < 2:
    print("NOT ENOUGH OBJECTS")
    exit(0)

(contours, _) = imutils.contours.sort_contours(contours)
poly_contour = [None]*len(contours)
rectangle = [None]*len(contours)
for i, c in enumerate(contours):
    poly_contour[i] = cv2.approxPolyDP(c, 3, True)
    rectangle[i] = cv2.boundingRect(poly_contour[i])

output = image.copy()
mmPerPixel = args["width"] / rectangle[0][2]
rect_high = 1000
rect_low = 0


for i in range(1, len(contours)):
    #rectangle too small (then ignore)
    if rectangle[i][2] < 50 or rectangle[i][3] < 50:
        continue


    #first rectangle is reference material, ratios set
    if rect_high > rectangle[i][1]:
        rect_high = rectangle[i][1]

    if rect_low < (rectangle[i][1] + rectangle[i][3]):
        rect_low = (rectangle[i][1] + rectangle[i][3])


    #create bounding box
    cv2.rectangle(output, (int(rectangle[i][0]), int(rectangle[i][1])),
                  (int(rectangle[i][0] + rectangle[i][2]),
                  int(rectangle[i][1] + rectangle[i][3])), (255, 0, 0), 2)



#HEIGHT CALCULATION
plant_height = (rect_low - rect_high) * mmPerPixel
print("Plant height is {0:.0f}mm".format(plant_height))


# Resize and display the image (press key to exit) NOT NEED FOR WEB DEPLOY
#resized_image = output_image
#cv2.imshow("Image", resized_image)
#cv2.waitKey(0)



@app.route('/')
@cross_origin()
def index():
    return str(plant_height)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)