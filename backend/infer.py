import pickle

import numpy as np
from keras.models import load_model
from tensorflow.keras.preprocessing import image

model = load_model("./weights/model.h5")

with open("./weights/plan_model.pkl", "rb") as file:
    plan_model = pickle.load(file)


def process_for_infer(path):
    """
    This function takes the image as input and return the stroke subtype as output.
    """
    img = image.load_img(path, target_size=(640, 640))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    # pred = model.predict(img_array)
    pred = model.predict(img_array).flatten()[0]

    if pred >= 0.5:
        label = "CE"
    else:
        label = "LAA"

    return label


def getPlan(new_data, threshold=0.7):
    probabilities = plan_model.predict_proba(new_data)
    print(probabilities)

    max_prob = max(probabilities[0])
    predicted_class = plan_model.classes_[probabilities.argmax()]

    if max_prob > threshold:
        return predicted_class
    else:
        return "6"
