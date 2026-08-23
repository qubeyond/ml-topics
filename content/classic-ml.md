# Классический ML

## Часть I. Основы — сквозная теория

### I.1 Что такое машинное обучение
- [ ] I.1.1 Supervised / unsupervised / semi-supervised / self-supervised / RL
- [ ] I.1.2 Пространство гипотез (hypothesis space)
- [ ] I.1.3 Индуктивное смещение (inductive bias)
- [ ] I.1.4 Параметрические vs непараметрические модели

### I.2 Формализация обучения и обобщение
- [ ] I.2.1 Generalization (обобщающая способность)
- [ ] I.2.2 Empirical risk minimization
- [ ] I.2.3 No Free Lunch theorem
- [ ] I.2.4 VC-размерность
- [ ] I.2.5 i.i.d.-предположение

### I.3 Bias-variance tradeoff
- [ ] I.3.1 Смещение (bias)
- [ ] I.3.2 Разброс (variance)
- [ ] I.3.3 Overfitting / underfitting
- [ ] I.3.4 Learning curves
- [ ] I.3.5 Irreducible error

### I.4 Работа с данными: разбиение и валидация
- [ ] I.4.1 Train / validation / test split
- [ ] I.4.2 K-fold cross-validation
- [ ] I.4.3 Stratified k-fold
- [ ] I.4.4 Leave-one-out
- [ ] I.4.5 Time series split
- [ ] I.4.6 Data leakage

### I.5 Функции потерь
- [ ] I.5.1 MSE / MAE / Huber loss
- [ ] I.5.2 Cross-entropy
- [ ] I.5.3 Hinge loss
- [ ] I.5.4 Log-loss
- [ ] I.5.5 0/1-loss
- [ ] I.5.6 Выпуклые vs невыпуклые функции потерь

### I.6 Оптимизация (общая теория)
- [ ] I.6.1 Batch / stochastic / mini-batch градиентный спуск
- [ ] I.6.2 Локальные vs глобальные минимумы
- [ ] I.6.3 Learning rate

### I.7 Регуляризация — общая идея
- [ ] I.7.1 L1-регуляризация (Lasso)
- [ ] I.7.2 L2-регуляризация (Ridge)
- [ ] I.7.3 Elastic Net
- [ ] I.7.4 Ранняя остановка (early stopping)

### I.8 Предобработка данных и feature engineering
- [ ] I.8.1 Standardization / min-max / robust scaling
- [ ] I.8.2 One-hot / ordinal / target / frequency encoding
- [ ] I.8.3 Импутация пропусков
- [ ] I.8.4 Генерация признаков

### I.9 Отбор признаков
- [ ] I.9.1 Filter methods
- [ ] I.9.2 Wrapper methods
- [ ] I.9.3 Embedded methods
- [ ] I.9.4 Проклятие размерности (curse of dimensionality)

### I.10 Подбор гиперпараметров и селекция моделей
- [ ] I.10.1 Grid search / random search
- [ ] I.10.2 Bayesian optimization
- [ ] I.10.3 Nested cross-validation

### I.11 Ансамблирование — общая теория
- [ ] I.11.1 Bagging
- [ ] I.11.2 Boosting
- [ ] I.11.3 Stacking / blending

### I.12 Вероятностный взгляд на обучение
- [ ] I.12.1 Frequentist vs Bayesian подход
- [ ] I.12.2 Maximum Likelihood Estimation (MLE)
- [ ] I.12.3 Maximum A Posteriori (MAP)

### I.13 Интерпретируемость моделей
- [ ] I.13.1 Feature importance
- [ ] I.13.2 Partial Dependence Plots
- [ ] I.13.3 SHAP values
- [ ] I.13.4 LIME

- [ ] I.14 Общая типология метрик качества

## Часть II. Регрессия

### II.1 Линейная регрессия
- [ ] II.1.1 OLS (метод наименьших квадратов)
- [ ] II.1.2 Нормальное уравнение vs градиентный спуск
- [ ] II.1.3 Предпосылки линейной регрессии

### II.2 Полиномиальная и нелинейная регрессия
- [ ] II.2.1 Полиномиальные признаки
- [ ] II.2.2 Базисные функции (basis functions)

- [ ] II.3 Регуляризованная регрессия
### II.4 Робастная регрессия
- [ ] II.4.1 Huber regression
- [ ] II.4.2 RANSAC
- [ ] II.4.3 Quantile regression

### II.5 Диагностика регрессионных моделей
- [ ] II.5.1 Анализ остатков (residual plots)
- [ ] II.5.2 Гетероскедастичность
- [ ] II.5.3 Мультиколлинеарность и VIF
- [ ] II.5.4 Q-Q plot

### II.6 Метрики регрессии
- [ ] II.6.1 MAE / MSE / RMSE
- [ ] II.6.2 R² / adjusted R²
- [ ] II.6.3 MAPE / SMAPE

### II.7 Инструменты (регрессия)
- [ ] II.7.1 sklearn.linear_model
- [ ] II.7.2 statsmodels


## Часть III. Классификация

### III.1 Логистическая регрессия
- [ ] III.1.1 Sigmoid / softmax
- [ ] III.1.2 Decision boundary
- [ ] III.1.3 One-vs-rest vs softmax (multinomial)
- [ ] III.1.4 Odds ratio

### III.2 Метод ближайших соседей (KNN)
- [ ] III.2.1 Принцип KNN и выбор k
- [ ] III.2.2 Метрики расстояния
- [ ] III.2.3 Взвешенный KNN

### III.3 Наивный Байес
- [ ] III.3.1 Байесовская теорема как основа
- [ ] III.3.2 Предположение о независимости признаков
- [ ] III.3.3 Gaussian / Multinomial / Bernoulli NB

### III.4 Метод опорных векторов (SVM)
- [ ] III.4.1 Максимизация зазора (margin)
- [ ] III.4.2 Опорные векторы
- [ ] III.4.3 Soft margin и параметр C
- [ ] III.4.4 Kernel trick и ядра

### III.5 Деревья решений
- [ ] III.5.1 Gini impurity / entropy (information gain)
- [ ] III.5.2 Pruning (pre-/post-)
- [ ] III.5.3 Глубина дерева, min_samples_split/leaf

### III.6 Ансамбли: бэггинг
- [ ] III.6.1 Random Forest
- [ ] III.6.2 Out-of-bag оценка
- [ ] III.6.3 Extra Trees

### III.7 Ансамбли: бустинг
- [ ] III.7.1 AdaBoost
- [ ] III.7.2 Gradient Boosting
- [ ] III.7.3 XGBoost / LightGBM / CatBoost

### III.8 Стекинг и блендинг
- [ ] III.8.1 Meta-learner
- [ ] III.8.2 Out-of-fold предсказания

### III.9 Метрики классификации
- [ ] III.9.1 Confusion matrix
- [ ] III.9.2 Accuracy / precision / recall / F1
- [ ] III.9.3 ROC-AUC / PR-AUC
- [ ] III.9.4 Log-loss, Cohen's kappa, MCC

### III.10 Калибровка вероятностей
- [ ] III.10.1 Platt scaling / isotonic regression
- [ ] III.10.2 Calibration curve (reliability diagram)

### III.11 Многоклассовая и multi-label классификация
- [ ] III.11.1 One-vs-Rest / One-vs-One
- [ ] III.11.2 Multi-label подходы

### III.12 Дисбаланс классов
- [ ] III.12.1 Class weighting
- [ ] III.12.2 Oversampling (SMOTE, ADASYN)
- [ ] III.12.3 Undersampling (Tomek links, NearMiss)
- [ ] III.12.4 Threshold tuning

### III.13 Инструменты (классификация)
- [ ] III.13.1 sklearn
- [ ] III.13.2 xgboost / lightgbm / catboost
- [ ] III.13.3 imbalanced-learn (imblearn)


## Часть IV. Кластеризация

### IV.1 K-Means и его варианты
- [ ] IV.1.1 Алгоритм Ллойда
- [ ] IV.1.2 k-means++
- [ ] IV.1.3 Elbow method / silhouette analysis
- [ ] IV.1.4 K-Medoids (PAM)

### IV.2 Иерархическая кластеризация
- [ ] IV.2.1 Agglomerative vs divisive
- [ ] IV.2.2 Linkage (single/complete/average/Ward)
- [ ] IV.2.3 Дендрограмма и точка разреза

### IV.3 Плотностные методы
- [ ] IV.3.1 DBSCAN
- [ ] IV.3.2 OPTICS

### IV.4 Модельная кластеризация
- [ ] IV.4.1 Gaussian Mixture Models
- [ ] IV.4.2 EM-алгоритм

### IV.5 Метрики качества кластеризации
- [ ] IV.5.1 Silhouette / Davies-Bouldin / Calinski-Harabasz
- [ ] IV.5.2 ARI / NMI

- [ ] IV.6 Инструменты (кластеризация)

## Часть V. Снижение размерности

### V.1 Метод главных компонент (PCA)
- [ ] V.1.1 Собственные векторы/значения ковариационной матрицы
- [ ] V.1.2 Explained variance ratio
- [ ] V.1.3 Kernel PCA

- [ ] V.2 Линейный дискриминантный анализ (LDA)
### V.3 Нелинейные методы визуализации
- [ ] V.3.1 t-SNE
- [ ] V.3.2 UMAP

- [ ] V.4 Feature extraction vs feature selection
- [ ] V.5 Инструменты (снижение размерности)

## Часть VI. Инженерия классического ML

- [ ] VI.1 Пайплайны и воспроизводимость
### VI.2 Сериализация и деплой моделей
- [ ] VI.2.1 pickle / joblib
- [ ] VI.2.2 ONNX

- [ ] VI.3 Мониторинг моделей в проде
