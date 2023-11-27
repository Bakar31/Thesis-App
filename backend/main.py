import io
import pandas as pd
import tensorflow as tf
from pydantic import BaseModel
from fastapi import FastAPI, Request, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from infer import model, plan_model, process_for_infer, getPlan

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HealthData(BaseModel):
    age: int
    sex: str
    strokeType: str
    smoker: str
    arrhythmia: str
    diabetics: str
    hypertension: str
    obesity: str
    tia: str
    osa: str
    cs: str
    npstrokes: int


@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    contents = await file.read()
    tf_image = tf.image.decode_image(contents)
    tf_encoded_image = tf.io.encode_jpeg(tf_image)
    image_bytes_io = io.BytesIO(tf_encoded_image.numpy())

    subtype = process_for_infer(image_bytes_io)
    text = f'Ischemic Stroke subtype for the given image is: {subtype}'

    return {"text": text}


@app.post("/predict/")
async def predict_plan(data: HealthData):
    data_dict = dict(data)
    new_data = list(data_dict.values())
    new_data = [[int(i) for i in new_data]]

    plan = getPlan(new_data)
    # text = f'The recommended Treatment plan for this patient is: {str(plan[0])}'
    text = str(plan[0])
    return {'result': text}