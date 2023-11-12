import skimage as ski
import os

camera = ski.data.camera()

filename = os.path.join("data", "image.png")
image = ski.io.imread(filename)
