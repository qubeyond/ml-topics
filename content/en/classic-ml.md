## Problem Framing and Generalization

### What Is Machine Learning

- [ ] Supervised / unsupervised / semi-supervised / self-supervised / RL
- [ ] Hypothesis space
- [ ] Inductive bias
- [ ] Parametric vs non-parametric models

### Formalizing Learning and Generalization

- [ ] Generalization
- [ ] Empirical risk minimization
- [ ] No Free Lunch theorem
- [ ] VC dimension
- [ ] i.i.d. assumption

### Bias-variance tradeoff

- [ ] Bias
- [ ] Variance
- [ ] Overfitting / underfitting
- [ ] Learning curves
- [ ] Irreducible error

### Working with Data: Splitting and Validation

- [ ] Train / validation / test split
- [ ] K-fold cross-validation
- [ ] Stratified k-fold
- [ ] Leave-one-out
- [ ] Time series split
- [ ] Data leakage


## Optimization, Regularization, and Data

### Loss Functions

- [ ] MSE / MAE / Huber loss
- [ ] Cross-entropy
- [ ] Hinge loss
- [ ] Log-loss
- [ ] 0/1-loss
- [ ] Convex vs non-convex loss functions

### Optimization (General Theory)

- [ ] Batch / stochastic / mini-batch gradient descent
- [ ] Local vs global minima
- [ ] Learning rate

### Regularization — The General Idea

- [ ] Lasso
- [ ] Ridge
- [ ] Elastic Net
- [ ] Early stopping

### Data Preprocessing and Feature Engineering

- [ ] Standardization / min-max / robust scaling
- [ ] One-hot / ordinal / target / frequency encoding
- [ ] Imputing missing values
- [ ] Feature generation

### Feature Selection

- [ ] Filter methods
- [ ] Wrapper methods
- [ ] Embedded methods
- [ ] Curse of dimensionality

### Hyperparameter Tuning and Model Selection

- [ ] Grid search / random search
- [ ] Bayesian optimization
- [ ] Nested cross-validation


## Ensembles, Probability, and Interpretability

### Ensembling — General Theory

- [ ] Bagging
- [ ] Boosting
- [ ] Stacking / blending

### A Probabilistic View of Learning

- [ ] Frequentist vs Bayesian approach
- [ ] Maximum Likelihood Estimation (MLE)
- [ ] Maximum A Posteriori (MAP)

### Model Interpretability

- [ ] Feature importance
- [ ] Partial Dependence Plots
- [ ] SHAP values
- [ ] LIME

- [ ] General typology of quality metrics


## Regression

### Linear Regression

- [ ] OLS (ordinary least squares)
- [ ] Normal equation vs gradient descent
- [ ] Assumptions of linear regression

### Polynomial and Nonlinear Regression

- [ ] Polynomial features
- [ ] Basis functions

- [ ] Regularized regression

### Robust Regression

- [ ] Huber regression
- [ ] RANSAC
- [ ] Quantile regression

### Diagnosing Regression Models

- [ ] Residual plots
- [ ] Heteroscedasticity
- [ ] Multicollinearity and VIF
- [ ] Q-Q plot

### Regression Metrics

- [ ] MAE / MSE / RMSE
- [ ] R² / adjusted R²
- [ ] MAPE / SMAPE

### Tools (Regression)

- [ ] sklearn.linear_model
- [ ] statsmodels


## Classification

### Logistic Regression

- [ ] Sigmoid / softmax
- [ ] Decision boundary
- [ ] One-vs-rest vs softmax (multinomial)
- [ ] Odds ratio

### K-Nearest Neighbors (KNN)

- [ ] The KNN principle and choosing k
- [ ] Distance metrics
- [ ] Weighted KNN

### Naive Bayes

- [ ] Bayes' theorem as the foundation
- [ ] The feature-independence assumption
- [ ] Gaussian / Multinomial / Bernoulli NB

### Support Vector Machines (SVM)

- [ ] Margin
- [ ] Support vectors
- [ ] Soft margin and the C parameter
- [ ] The kernel trick and kernel functions

### Decision Trees

- [ ] Gini impurity / entropy (information gain)
- [ ] Pruning (pre-/post-)
- [ ] Tree depth, min_samples_split/leaf

### Ensembles: Bagging

- [ ] Random Forest
- [ ] Out-of-bag estimate
- [ ] Extra Trees

### Ensembles: Boosting

- [ ] AdaBoost
- [ ] Gradient Boosting
- [ ] XGBoost / LightGBM / CatBoost

### Stacking and Blending

- [ ] Meta-learner
- [ ] Out-of-fold predictions

### Classification Metrics

- [ ] Confusion matrix
- [ ] Accuracy / precision / recall / F1
- [ ] ROC-AUC / PR-AUC
- [ ] Log-loss, Cohen's kappa, MCC

### Probability Calibration

- [ ] Platt scaling / isotonic regression
- [ ] Calibration curve (reliability diagram)

### Multiclass and Multi-Label Classification

- [ ] One-vs-Rest / One-vs-One
- [ ] Multi-label approaches

### Class Imbalance

- [ ] Class weighting
- [ ] Oversampling (SMOTE, ADASYN)
- [ ] Undersampling (Tomek links, NearMiss)
- [ ] Threshold tuning

### Tools (Classification)

- [ ] sklearn
- [ ] xgboost / lightgbm / catboost
- [ ] imbalanced-learn (imblearn)


## Clustering

### K-Means and Its Variants

- [ ] Lloyd's algorithm
- [ ] k-means++
- [ ] Elbow method / silhouette analysis
- [ ] K-Medoids (PAM)

### Hierarchical Clustering

- [ ] Agglomerative vs divisive
- [ ] Linkage (single/complete/average/Ward)
- [ ] Dendrogram and the cut point

### Density-Based Methods

- [ ] DBSCAN
- [ ] OPTICS

### Model-Based Clustering

- [ ] Gaussian Mixture Models
- [ ] EM algorithm

### Clustering Quality Metrics

- [ ] Silhouette / Davies-Bouldin / Calinski-Harabasz
- [ ] ARI / NMI

- [ ] Tools (clustering)


## Dimensionality Reduction

### Principal Component Analysis (PCA)

- [ ] Eigenvectors/eigenvalues
- [ ] Explained variance ratio
- [ ] Kernel PCA

- [ ] LDA

### Nonlinear Visualization Methods

- [ ] t-SNE
- [ ] UMAP

- [ ] Feature extraction vs feature selection
- [ ] Tools (dimensionality reduction)


## Classical ML Engineering

- [ ] Pipelines and reproducibility

### Model Serialization and Deployment

- [ ] pickle / joblib
- [ ] ONNX

- [ ] Monitoring models in production
