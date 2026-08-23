# Классический ML

## Часть I. Постановка задачи и обобщение

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


## Часть II. Оптимизация, регуляризация и данные

### II.1 Функции потерь
- [ ] MSE / MAE / Huber loss
- [ ] Cross-entropy
- [ ] Hinge loss
- [ ] Log-loss
- [ ] 0/1-loss
- [ ] Выпуклые vs невыпуклые функции потерь

### II.2 Оптимизация (общая теория)
- [ ] Batch / stochastic / mini-batch градиентный спуск
- [ ] Локальные vs глобальные минимумы
- [ ] Learning rate

### II.3 Регуляризация — общая идея
- [ ] L1-регуляризация (Lasso)
- [ ] L2-регуляризация (Ridge)
- [ ] Elastic Net
- [ ] Ранняя остановка (early stopping)

### II.4 Предобработка данных и feature engineering
- [ ] Standardization / min-max / robust scaling
- [ ] One-hot / ordinal / target / frequency encoding
- [ ] Импутация пропусков
- [ ] Генерация признаков

### II.5 Отбор признаков
- [ ] Filter methods
- [ ] Wrapper methods
- [ ] Embedded methods
- [ ] Проклятие размерности (curse of dimensionality)

### II.6 Подбор гиперпараметров и селекция моделей
- [ ] Grid search / random search
- [ ] Bayesian optimization
- [ ] Nested cross-validation


## Часть III. Ансамбли, вероятность и интерпретируемость

### III.1 Ансамблирование — общая теория
- [ ] Bagging
- [ ] Boosting
- [ ] Stacking / blending

### III.2 Вероятностный взгляд на обучение
- [ ] Frequentist vs Bayesian подход
- [ ] Maximum Likelihood Estimation (MLE)
- [ ] Maximum A Posteriori (MAP)

### III.3 Интерпретируемость моделей
- [ ] Feature importance
- [ ] Partial Dependence Plots
- [ ] SHAP values
- [ ] LIME

- [ ] III.4 Общая типология метрик качества

## Часть IV. Регрессия

### IV.1 Линейная регрессия
- [ ] OLS (метод наименьших квадратов)
- [ ] Нормальное уравнение vs градиентный спуск
- [ ] Предпосылки линейной регрессии

### IV.2 Полиномиальная и нелинейная регрессия
- [ ] Полиномиальные признаки
- [ ] Базисные функции (basis functions)

- [ ] IV.3 Регуляризованная регрессия
### IV.4 Робастная регрессия
- [ ] Huber regression
- [ ] RANSAC
- [ ] Quantile regression

### IV.5 Диагностика регрессионных моделей
- [ ] Анализ остатков (residual plots)
- [ ] Гетероскедастичность
- [ ] Мультиколлинеарность и VIF
- [ ] Q-Q plot

### IV.6 Метрики регрессии
- [ ] MAE / MSE / RMSE
- [ ] R² / adjusted R²
- [ ] MAPE / SMAPE

### IV.7 Инструменты (регрессия)
- [ ] sklearn.linear_model
- [ ] statsmodels


## Часть V. Классификация

### V.1 Логистическая регрессия
- [ ] Sigmoid / softmax
- [ ] Decision boundary
- [ ] One-vs-rest vs softmax (multinomial)
- [ ] Odds ratio

### V.2 Метод ближайших соседей (KNN)
- [ ] Принцип KNN и выбор k
- [ ] Метрики расстояния
- [ ] Взвешенный KNN

### V.3 Наивный Байес
- [ ] Байесовская теорема как основа
- [ ] Предположение о независимости признаков
- [ ] Gaussian / Multinomial / Bernoulli NB

### V.4 Метод опорных векторов (SVM)
- [ ] Максимизация зазора (margin)
- [ ] Опорные векторы
- [ ] Soft margin и параметр C
- [ ] Kernel trick и ядра

### V.5 Деревья решений
- [ ] Gini impurity / entropy (information gain)
- [ ] Pruning (pre-/post-)
- [ ] Глубина дерева, min_samples_split/leaf

### V.6 Ансамбли: бэггинг
- [ ] Random Forest
- [ ] Out-of-bag оценка
- [ ] Extra Trees

### V.7 Ансамбли: бустинг
- [ ] AdaBoost
- [ ] Gradient Boosting
- [ ] XGBoost / LightGBM / CatBoost

### V.8 Стекинг и блендинг
- [ ] Meta-learner
- [ ] Out-of-fold предсказания

### V.9 Метрики классификации
- [ ] Confusion matrix
- [ ] Accuracy / precision / recall / F1
- [ ] ROC-AUC / PR-AUC
- [ ] Log-loss, Cohen's kappa, MCC

### V.10 Калибровка вероятностей
- [ ] Platt scaling / isotonic regression
- [ ] Calibration curve (reliability diagram)

### V.11 Многоклассовая и multi-label классификация
- [ ] One-vs-Rest / One-vs-One
- [ ] Multi-label подходы

### V.12 Дисбаланс классов
- [ ] Class weighting
- [ ] Oversampling (SMOTE, ADASYN)
- [ ] Undersampling (Tomek links, NearMiss)
- [ ] Threshold tuning

### V.13 Инструменты (классификация)
- [ ] sklearn
- [ ] xgboost / lightgbm / catboost
- [ ] imbalanced-learn (imblearn)


## Часть VI. Кластеризация

### VI.1 K-Means и его варианты
- [ ] Алгоритм Ллойда
- [ ] k-means++
- [ ] Elbow method / silhouette analysis
- [ ] K-Medoids (PAM)

### VI.2 Иерархическая кластеризация
- [ ] Agglomerative vs divisive
- [ ] Linkage (single/complete/average/Ward)
- [ ] Дендрограмма и точка разреза

### VI.3 Плотностные методы
- [ ] DBSCAN
- [ ] OPTICS

### VI.4 Модельная кластеризация
- [ ] Gaussian Mixture Models
- [ ] EM-алгоритм

### VI.5 Метрики качества кластеризации
- [ ] Silhouette / Davies-Bouldin / Calinski-Harabasz
- [ ] ARI / NMI

- [ ] VI.6 Инструменты (кластеризация)

## Часть VII. Снижение размерности

### VII.1 Метод главных компонент (PCA)
- [ ] Собственные векторы/значения ковариационной матрицы
- [ ] Explained variance ratio
- [ ] Kernel PCA

- [ ] VII.2 Линейный дискриминантный анализ (LDA)
### VII.3 Нелинейные методы визуализации
- [ ] t-SNE
- [ ] UMAP

- [ ] VII.4 Feature extraction vs feature selection
- [ ] VII.5 Инструменты (снижение размерности)

## Часть VIII. Инженерия классического ML

- [ ] VIII.1 Пайплайны и воспроизводимость
### VIII.2 Сериализация и деплой моделей
- [ ] pickle / joblib
- [ ] ONNX

- [ ] VIII.3 Мониторинг моделей в проде
