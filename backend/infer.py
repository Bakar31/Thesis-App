import pickle
import numpy as np
from keras.models import load_model
from tensorflow.keras.preprocessing import image

# load the trained model
model = load_model('./weights/model_.81.h5')

with open('./weights/plan_model.pkl', 'rb') as file:
    plan_model = pickle.load(file)


def process_for_infer(path):
  '''
  This function takes the image as input and return the stroke subtype as output.
  '''
  img = image.load_img(path, target_size=(640, 640))
  img_array = image.img_to_array(img)
  img_array = np.expand_dims(img_array, axis=0)
  # pred = model.predict(img_array)
  pred = model.predict(img_array).flatten()[0]

  if pred >= .5:
    label = 'CE'
  else:
    label = "LAA"

  return label


def getPlan(new_data):
  
  return(plan_model.predict(new_data))