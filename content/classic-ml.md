# Классический ML


## Постановка задачи и обобщение

### Что такое машинное обучение

- [ ] Supervised / unsupervised / semi-supervised / self-supervised / RL
- [ ] Пространство гипотез (hypothesis space)
- [ ] Индуктивное смещение (inductive bias)
- [ ] Параметрические vs непараметрические модели

### Формализация обучения и обобщение

- [ ] Generalization (обобщающая способность)
- [ ] Empirical risk minimization
- [ ] No Free Lunch theorem
- [ ] VC-размерность
- [ ] i.i.d.-предположение

### Bias-variance tradeoff

- [ ] Смещение (bias)
- [ ] Разброс (variance)
- [ ] Overfitting / underfitting
- [ ] Learning curves
- [ ] Irreducible error

### Работа с данными: разбиение и валидация

- [ ] Train / validation / test split
- [ ] K-fold cross-validation
- [ ] Stratified k-fold
- [ ] Leave-one-out
- [ ] Time series split
- [ ] Data leakage

## Оптимизация, регуляризация и данные

### Функции потерь

- [ ] MSE / MAE / Huber loss
- [ ] Cross-entropy
- [ ] Hinge loss
- [ ] Log-loss
- [ ] 0/1-loss
- [ ] Выпуклые vs невыпуклые функции потерь

### Оптимизация (общая теория)

- [ ] Batch / stochastic / mini-batch градиентный спуск
- [ ] Локальные vs глобальные минимумы
- [ ] Learning rate

### Регуляризация — общая идея

- [ ] L1-регуляризация (Lasso)
- [ ] L2-регуляризация (Ridge)
- [ ] Elastic Net
- [ ] Ранняя остановка (early stopping)

### Предобработка данных и feature engineering

- [ ] Standardization / min-max / robust scaling
- [ ] One-hot / ordinal / target / frequency encoding
- [ ] Импутация пропусков
- [ ] Генерация признаков

### Отбор признаков

- [ ] Filter methods
- [ ] Wrapper methods
- [ ] Embedded methods
- [ ] Проклятие размерности (curse of dimensionality)

### Подбор гиперпараметров и селекция моделей

- [ ] Grid search / random search
- [ ] Bayesian optimization
- [ ] Nested cross-validation

## Ансамбли, вероятность и интерпретируемость

### Ансамблирование — общая теория

- [ ] Bagging
- [ ] Boosting
- [ ] Stacking / blending

### Вероятностный взгляд на обучение

- [ ] Frequentist vs Bayesian подход
- [ ] Maximum Likelihood Estimation (MLE)
- [ ] Maximum A Posteriori (MAP)

### Интерпретируемость моделей

- [ ] Feature importance
- [ ] Partial Dependence Plots
- [ ] SHAP values
- [ ] LIME

- [ ] Общая типология метрик качества

## Регрессия

### Линейная регрессия

- [ ] OLS (метод наименьших квадратов)
- [ ] Нормальное уравнение vs градиентный спуск
- [ ] Предпосылки линейной регрессии

### Полиномиальная и нелинейная регрессия

- [ ] Полиномиальные признаки (polynomial features)
- [ ] Базисные функции (basis functions)

- [ ] Регуляризованная регрессия

### Робастная регрессия

- [ ] Huber regression
- [ ] RANSAC
- [ ] Quantile regression

### Диагностика регрессионных моделей

- [ ] Анализ остатков (residual plots)
- [ ] Гетероскедастичность
- [ ] Мультиколлинеарность и VIF
- [ ] Q-Q plot

### Метрики регрессии

- [ ] MAE / MSE / RMSE
- [ ] R² / adjusted R²
- [ ] MAPE / SMAPE

### Инструменты (регрессия)

- [ ] sklearn.linear_model
- [ ] statsmodels

## Классификация

### Логистическая регрессия

- [ ] Sigmoid / softmax
- [ ] Decision boundary
- [ ] One-vs-rest vs softmax (multinomial)
- [ ] Odds ratio

### Метод ближайших соседей (KNN)

- [ ] Принцип KNN и выбор k
- [ ] Метрики расстояния
- [ ] Взвешенный KNN

### Наивный Байес

- [ ] Байесовская теорема как основа
- [ ] Предположение о независимости признаков
- [ ] Gaussian / Multinomial / Bernoulli NB

### Метод опорных векторов (SVM)

- [ ] Максимизация зазора (margin)
- [ ] Опорные векторы (support vectors)
- [ ] Soft margin и параметр C
- [ ] Kernel trick и ядра

### Деревья решений

- [ ] Gini impurity / entropy (information gain)
- [ ] Pruning (pre-/post-)
- [ ] Глубина дерева, min_samples_split/leaf

### Ансамбли: бэггинг

- [ ] Random Forest
- [ ] Out-of-bag оценка
- [ ] Extra Trees

### Ансамбли: бустинг

- [ ] AdaBoost
- [ ] Gradient Boosting
- [ ] XGBoost / LightGBM / CatBoost

### Стекинг и блендинг

- [ ] Meta-learner
- [ ] Out-of-fold предсказания

### Метрики классификации

- [ ] Confusion matrix
- [ ] Accuracy / precision / recall / F1
- [ ] ROC-AUC / PR-AUC
- [ ] Log-loss, Cohen's kappa, MCC

### Калибровка вероятностей

- [ ] Platt scaling / isotonic regression
- [ ] Calibration curve (reliability diagram)

### Многоклассовая и multi-label классификация

- [ ] One-vs-Rest / One-vs-One
- [ ] Multi-label подходы

### Дисбаланс классов

- [ ] Class weighting
- [ ] Oversampling (SMOTE, ADASYN)
- [ ] Undersampling (Tomek links, NearMiss)
- [ ] Threshold tuning

### Инструменты (классификация)

- [ ] sklearn
- [ ] xgboost / lightgbm / catboost
- [ ] imbalanced-learn (imblearn)

## Кластеризация

### K-Means и его варианты

- [ ] Алгоритм Ллойда (Lloyd's algorithm)
- [ ] k-means++
- [ ] Elbow method / silhouette analysis
- [ ] K-Medoids (PAM)

### Иерархическая кластеризация

- [ ] Agglomerative vs divisive
- [ ] Linkage (single/complete/average/Ward)
- [ ] Дендрограмма и точка разреза

### Плотностные методы

- [ ] DBSCAN
- [ ] OPTICS

### Модельная кластеризация

- [ ] Gaussian Mixture Models
- [ ] EM-алгоритм

### Метрики качества кластеризации

- [ ] Silhouette / Davies-Bouldin / Calinski-Harabasz
- [ ] ARI / NMI

- [ ] Инструменты (кластеризация)

## Снижение размерности

### Метод главных компонент (PCA)

- [ ] Собственные векторы/значения ковариационной матрицы (eigenvectors/eigenvalues)
- [ ] Explained variance ratio
- [ ] Kernel PCA

- [ ] Линейный дискриминантный анализ (LDA)

### Нелинейные методы визуализации

- [ ] t-SNE
- [ ] UMAP

- [ ] Feature extraction vs feature selection
- [ ] Инструменты (снижение размерности)

## Инженерия классического ML

- [ ] Пайплайны и воспроизводимость

### Сериализация и деплой моделей

- [ ] pickle / joblib
- [ ] ONNX

- [ ] Мониторинг моделей в проде
