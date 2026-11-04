
# ModelForge

**From raw data to trained models.**

ModelForge is an automated machine learning platform that transforms CSV datasets into predictive models. Users upload their data, select a target column, and let the system handle preprocessing, task detection, model training, and evaluation. It compares algorithms, identifies the best-performing model, and presents results through an interactive dashboard.

## Features

- CSV dataset upload
- Dataset preview and analysis
- User-defined target column selection
- Automatic classification and regression detection
- Automated data preprocessing
- Multiple machine learning algorithms
- Model training and comparison
- Performance evaluation
- Interactive result visualizations
- Best-performing model selection
- Model export and predictions

## Technology Stack

- Python
- Flask
- Pandas
- NumPy
- Scikit-learn
- Matplotlib
- HTML
- CSS
- JavaScript

## Project Structure

```text
ModelForge/
│
├── main.py
├── requirements.txt
│
├── modules/
│   ├── data_loader.py
│   ├── data_analyzer.py
│   ├── preprocessing.py
│   ├── task_detector.py
│   ├── trainer.py
│   ├── evaluator.py
│   └── predictor.py
│
├── templates/
│   ├── base.html
│   └── index.html
│
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd ModelForge
```

### 2. Create a virtual environment

```bash
python -m venv .venv
```

Activate it on Windows:

```powershell
.venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the application

```bash
python main.py
```

Open the local address displayed in the terminal.

## How It Works

1. Upload a CSV dataset.
2. Preview and inspect the dataset.
3. Select the target column.
4. Detect the machine learning task.
5. Preprocess the data.
6. Train multiple algorithms.
7. Compare model performance.
8. Review evaluation metrics and visualizations.
9. Export the selected model.
10. Generate predictions using new data.

## Evaluation Metrics

### Classification
- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix
- ROC-AUC (where applicable)

### Regression
- Mean Absolute Error (MAE)
- Mean Squared Error (MSE)
- Root Mean Squared Error (RMSE)
- R² Score

## Development Roadmap

- [ ] CSV upload and validation
- [ ] Dataset analysis
- [ ] Target column selection
- [ ] Automatic task detection
- [ ] Data preprocessing pipelines
- [ ] Classification models
- [ ] Regression models
- [ ] Model evaluation and comparison
- [ ] Results dashboard
- [ ] Model export
- [ ] Prediction interface

## Project Goal

To simplify the machine learning workflow by automating repetitive processes while making model evaluation and comparison accessible and understandable.

## License

This project is currently under development.
