## Origin Classification of Blood Clots in Ischemic Stroke and Treatment Plan Generation to Reduce the Likelihood of Another Stroke

![image](https://github.com/user-attachments/assets/aa02104e-8df8-4034-8066-80ec92daac6b)


### Abstract

The healthcare burden caused by stroke, particularly ischemic stroke, is substantial both internationally and in Bangladesh. Precisely categorizing the subtype of ischemic stroke according to the source of the obstructive blood clot is essential for effective treatment planning and minimizing the likelihood of recurrence. The objective of this thesis is to create an automated system that can accurately classify different subtypes of ischemic stroke by utilizing advanced medical imaging techniques and deep learning algorithms. Moreover, the system aims to bring efficiency in creating individualized treatment strategies customized to the specific subtype of stroke and the patient's medical background, offering recommendations to reduce the probability of future stroke occurrences. The proposed methodology entails utilizing deep learning models to classify the origin of blood clots from digital pathology slides. The proposed approach achieved an AUC of 0.9291 and a binary accuracy of 0.8700 on the test set, outperforming existing methods. Specifically, the AUC was 6.9\%  higher and the binary accuracy was 14.5\%  higher than the existing literature. The model also demonstrated high performance with a precision of 0.8985, recall of 0.8493, sensitivity of 0.8219, and specificity of 0.8571, highlighting its strong capability across multiple evaluation metrics. These results outperformed existing methods from the literature, highlighting the effectiveness of the proposed approach. Additionally, the treatment plan recommendation part is treated as a classification problem in this study due to data limitations to the use of more advanced LLM approaches. The ML model will predict the most appropriate treatment plan category based on the input features. Physicians can evaluate and make changes to the automated programs through the system application user interface, incorporating their specialized knowledge. The system hopes to tackle the issues of insufficient physician resources, the absence of appropriate direction, and poor recovery rates in Bangladesh. 

### Experimental Result

| Data set | AUC    | Binary Accuracy | Precision | Recall  | Sensitivity | Specificity |
|----------|--------|-----------------|-----------|---------|-------------|-------------|
| Train    | 0.9846 | 0.9492          | 0.9538    | 0.9545  | -           | -           |
| Val      | 0.94   | 0.8966          | 0.8965    | 0.8992  | 0.9069      | 0.8543      |
| Test     | 0.9291 | 0.8700          | 0.8985    | 0.8493  | 0.8219      | 0.8571      |


This application serves as a platform to showcase our research results in a user-friendly and practical manner.

### Tech stack
- Tensorflow
- Scikit-learn
- Open-cv
- React
- FastAPI
- Tailwindcss

## Limitations

- Currently, the application supports only a limited number of static treatment plans due to data constraints. Future research can focus on enhancing diversity and introducing dynamic treatment plan features to improve user experience and utility.

## API Documentation

### upload Image API

`Endpoint: /upload/`

`Method: POST`

**Description:** Uploads a medical image, processes it, and determines the ischemic stroke subtype.

**Request:**

*File:* Image file (JPEG or other supported formats).

**Response:**

*text:* A string describing the ischemic stroke subtype.


### Predict Treatment Plan API

`Endpoint: /predict/`

`Method: POST`

**Description:** Accepts health data and returns a suitable treatment plan based on the input.

**Request:**

*Body*: JSON object containing health data (input structure depends on the model used).

**Response:**

*result: *The recommended treatment plan as a string.
