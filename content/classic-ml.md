# Классический ML

## Часть I. Основы — сквозная теория

### I.1 Что такое машинное обучение
- [ ] Supervised / unsupervised / semi-supervised / self-supervised / RL
- [ ] Пространство гипотез (hypothesis space)
- [ ] Индуктивное смещение (inductive bias)
- [ ] Параметрические vs непараметрические модели

### I.2 Формализация обучения и обобщение
- [ ] Generalization (обобщающая способность)
- [ ] Empirical risk minimization
- [ ] No Free Lunch theorem
- [ ] VC-размерность
- [ ] i.i.d.-предположение

### I.3 Bias-variance tradeoff
- [ ] Смещение (bias)
- [ ] Разброс (variance)
- [ ] Overfitting / underfitting
- [ ] Learning curves
- [ ] Irreducible error

### I.4 Работа с данными: разбиение и валидация
- [ ] Train / validation / test split
- [ ] K-fold cross-validation
- [ ] Stratified k-fold
- [ ] Leave-one-out
- [ ] Time series split
- [ ] Data leakage

### I.5 Функции потерь
- [ ] MSE / MAE / Huber loss
- [ ] Cross-entropy
- [ ] Hinge loss
- [ ] Log-loss
- [ ] 0/1-loss
- [ ] Выпуклые vs невыпуклые функции потерь

### I.6 Оптимизация (общая теория)
- [ ] Batch / stochastic / mini-batch градиентный спуск
- [ ] Локальные vs глобальные минимумы
- [ ] Learning rate

### I.7 Регуляризация — общая идея
- [ ] L1-регуляризация (Lasso)
- [ ] L2-регуляризация (Ridge)
- [ ] Elastic Net
- [ ] Ранняя остановка (early stopping)

### I.8 Предобработка данных и feature engineering
- [ ] Standardization / min-max / robust scaling
- [ ] One-hot / ordinal / target / frequency encoding
- [ ] Импутация пропусков
- [ ] Генерация признаков

### I.9 Отбор признаков
- [ ] Filter methods
- [ ] Wrapper methods
- [ ] Embedded methods
- [ ] Проклятие размерности (curse of dimensionality)

### I.10 Подбор гиперпараметров и селекция моделей
- [ ] Grid search / random search
- [ ] Bayesian optimization
- [ ] Nested cross-validation

### I.11 Ансамблирование — общая теория
- [ ] Bagging
- [ ] Boosting
- [ ] Stacking / blending

### I.12 Вероятностный взгляд на обучение
- [ ] Frequentist vs Bayesian подход
- [ ] Maximum Likelihood Estimation (MLE)
- [ ] Maximum A Posteriori (MAP)

### I.13 Интерпретируемость моделей
- [ ] Feature importance
- [ ] Partial Dependence Plots
- [ ] SHAP values
- [ ] LIME

- [ ] I.14 Общая типология метрик качества

## Часть II. Регрессия

### II.1 Линейная регрессия
- [ ] OLS (метод наименьших квадратов)
- [ ] Нормальное уравнение vs градиентный спуск
- [ ] Предпосылки линейной регрессии

### II.2 Полиномиальная и нелинейная регрессия
- [ ] Полиномиальные признаки
- [ ] Базисные функции (basis functions)

- [ ] II.3 Регуляризованная регрессия
### II.4 Робастная регрессия
- [ ] Huber regression
- [ ] RANSAC
- [ ] Quantile regression

### II.5 Диагностика регрессионных моделей
- [ ] Анализ остатков (residual plots)
- [ ] Гетероскедастичность
- [ ] Мультиколлинеарность и VIF
- [ ] Q-Q plot

### II.6 Метрики регрессии
- [ ] MAE / MSE / RMSE
- [ ] R² / adjusted R²
- [ ] MAPE / SMAPE

### II.7 Инструменты (регрессия)
- [ ] sklearn.linear_model
- [ ] statsmodels


## Часть III. Классификация

### III.1 Логистическая регрессия
- [ ] Sigmoid / softmax
- [ ] Decision boundary
- [ ] One-vs-rest vs softmax (multinomial)
- [ ] Odds ratio

### III.2 Метод ближайших соседей (KNN)
- [ ] Принцип KNN и выбор k
- [ ] Метрики расстояния
- [ ] Взвешенный KNN

### III.3 Наивный Байес
- [ ] Байесовская теорема как основа
- [ ] Предположение о независимости признаков
- [ ] Gaussian / Multinomial / Bernoulli NB

### III.4 Метод опорных векторов (SVM)
- [ ] Максимизация зазора (margin)
- [ ] Опорные векторы
- [ ] Soft margin и параметр C
- [ ] Kernel trick и ядра

### III.5 Деревья решений
- [ ] Gini impurity / entropy (information gain)
- [ ] Pruning (pre-/post-)
- [ ] Глубина дерева, min_samples_split/leaf

### III.6 Ансамбли: бэггинг
- [ ] Random Forest
- [ ] Out-of-bag оценка
- [ ] Extra Trees

### III.7 Ансамбли: бустинг
- [ ] AdaBoost
- [ ] Gradient Boosting
- [ ] XGBoost / LightGBM / CatBoost

### III.8 Стекинг и блендинг
- [ ] Meta-learner
- [ ] Out-of-fold предсказания

### III.9 Метрики классификации
- [ ] Confusion matrix
- [ ] Accuracy / precision / recall / F1
- [ ] ROC-AUC / PR-AUC
- [ ] Log-loss, Cohen's kappa, MCC

### III.10 Калибровка вероятностей
- [ ] Platt scaling / isotonic regression
- [ ] Calibration curve (reliability diagram)

### III.11 Многоклассовая и multi-label классификация
- [ ] One-vs-Rest / One-vs-One
- [ ] Multi-label подходы

### III.12 Дисбаланс классов
- [ ] Class weighting
- [ ] Oversampling (SMOTE, ADASYN)
- [ ] Undersampling (Tomek links, NearMiss)
- [ ] Threshold tuning

### III.13 Инструменты (классификация)
- [ ] sklearn
- [ ] xgboost / lightgbm / catboost
- [ ] imbalanced-learn (imblearn)


## Часть IV. Кластеризация

### IV.1 K-Means и его варианты
- [ ] Алгоритм Ллойда
- [ ] k-means++
- [ ] Elbow method / silhouette analysis
- [ ] K-Medoids (PAM)

### IV.2 Иерархическая кластеризация
- [ ] Agglomerative vs divisive
- [ ] Linkage (single/complete/average/Ward)
- [ ] Дендрограмма и точка разреза

### IV.3 Плотностные методы
- [ ] DBSCAN
- [ ] OPTICS

### IV.4 Модельная кластеризация
- [ ] Gaussian Mixture Models
- [ ] EM-алгоритм

### IV.5 Метрики качества кластеризации
- [ ] Silhouette / Davies-Bouldin / Calinski-Harabasz
- [ ] ARI / NMI

- [ ] IV.6 Инструменты (кластеризация)

## Часть V. Снижение размерности

### V.1 Метод главных компонент (PCA)
- [ ] Собственные векторы/значения ковариационной матрицы
- [ ] Explained variance ratio
- [ ] Kernel PCA

- [ ] V.2 Линейный дискриминантный анализ (LDA)
### V.3 Нелинейные методы визуализации
- [ ] t-SNE
- [ ] UMAP

- [ ] V.4 Feature extraction vs feature selection
- [ ] V.5 Инструменты (снижение размерности)

## Часть VI. Инженерия классического ML

- [ ] VI.1 Пайплайны и воспроизводимость
### VI.2 Сериализация и деплой моделей
- [ ] pickle / joblib
- [ ] ONNX

- [ ] VI.3 Мониторинг моделей в проде
