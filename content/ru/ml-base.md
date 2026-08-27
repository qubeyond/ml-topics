## Что такое машинное обучение

- [ ]{id:sup} Обучение с учителем
- [ ]{id:unsup} Обучение без учителя
- [ ]{id:semisup after:sup,unsup} Полу-контролируемое обучение
- [ ]{id:selfsup after:unsup} Self-supervised обучение
- [ ]{id:rl} Обучение с подкреплением
- [ ]{id:hyp} Пространство гипотез
- [ ]{id:indbias after:hyp} Индуктивное смещение
- [ ]{id:paramtype after:hyp} Параметрические и непараметрические модели
- [ ]{r id:meta after:hyp} Meta-learning (обучение обучаться)
- [ ]{r id:online after:sgd} Online-обучение
- [ ]{r id:multitask after:sup} Multi-task обучение
- [ ]{r id:federated after:sgd} Federated learning


## Подгонка модели: минимизация ошибки

- [ ]{id:erm after:sup,hyp} Empirical risk minimization
- [ ]{id:iid after:erm} i.i.d.-предположение
- [ ]{id:batchgd after:erm} Batch градиентный спуск
- [ ]{id:sgd after:batchgd} Stochastic градиентный спуск
- [ ]{id:minibatchgd after:sgd} Mini-batch градиентный спуск
- [ ]{id:minima after:batchgd} Локальные и глобальные минимумы
- [ ]{id:lr after:batchgd} Learning rate
- [ ]{r id:srm after:erm} Structural risk minimization
- [ ]{r id:saddle after:minima} Седловые точки в многомерной оптимизации
- [ ]{r id:convrate after:lr} Скорость сходимости градиентного спуска


## Вероятностный взгляд: правдоподобие

- [ ]{id:freq} Frequentist подход
- [ ]{id:bayes} Bayesian подход
- [ ]{id:mle after:freq,erm} Maximum Likelihood Estimation (MLE)
- [ ]{r id:moments after:mle} Метод моментов
- [ ]{r id:expfam after:mle} Экспоненциальное семейство распределений и обобщённые линейные модели
- [ ]{r id:fisher after:mle} Информация Фишера и неравенство Крамера-Рао


## Обобщающая способность

- [ ]{id:gen after:erm} Generalization
- [ ]{id:overfit after:gen} Overfitting
- [ ]{id:underfit after:gen} Underfitting
- [ ]{id:biasvar after:overfit,underfit} Bias-Variance Tradeoff (смещение, разброс, неустранимая ошибка)
- [ ]{id:lc after:biasvar} Learning curves
- [ ]{id:vc after:gen} VC-размерность
- [ ]{id:nfl after:gen} No Free Lunch theorem
- [ ]{r id:pac after:vc} PAC learning
- [ ]{r id:radem after:vc} Сложность Радемахера
- [ ]{r id:doubledesc after:biasvar} Феномен double descent
- [ ]{r id:algstab after:gen} Алгоритмическая устойчивость


## Типы задач и метрики качества

### Основы

- [ ]{id:metric after:gen} Что такое метрика и зачем нужны разные метрики под разные задачи
- [ ]{id:metricvsloss after:metric,erm} Чем метрика отличается от функции потерь
- [ ]{r id:pareto after:metricvsloss} Многокритериальное / Парето-оптимальное сравнение моделей

### Типы задач в машинном обучении

- [ ]{id:taskclass after:sup} Классификация (бинарная, многоклассовая, многометочная)
- [ ]{id:taskreg after:sup} Регрессия
- [ ]{r id:taskrank after:sup} Ранжирование
- [ ]{r id:taskcluster after:unsup} Кластеризация

### Метрики классификации

- [ ]{id:accuracy after:taskclass,metric} Accuracy
- [ ]{id:precrecall after:taskclass,metric} Precision и Recall
- [ ]{id:f1 after:precrecall} F1-score
- [ ]{id:rocauc after:taskclass,metric} ROC-AUC
- [ ]{id:confmatrix after:taskclass} Confusion matrix
- [ ]{r id:prauc after:rocauc} PR-AUC
- [ ]{r id:properscoring after:rocauc} Proper scoring rules
- [ ]{r id:calibration after:rocauc} Калибровка вероятностных предсказаний

### Метрики регрессии

- [ ]{id:regmetrics after:taskreg,metric} MAE, MSE, RMSE как метрики качества
- [ ]{id:r2 after:regmetrics} R² (коэффициент детерминации)
- [ ]{r id:mape after:regmetrics} MAPE

### Метрики ранжирования и кластеризации

- [ ]{r id:rankmetrics after:taskrank} NDCG, MRR
- [ ]{r id:clustermetrics after:taskcluster} Silhouette score, Adjusted Rand Index


## Функции потерь

- [ ]{id:mse after:erm,regmetrics} MSE
- [ ]{id:mae after:erm,regmetrics} MAE
- [ ]{id:huber after:mse,mae} Huber loss
- [ ]{id:ce after:mle,rocauc} Cross-entropy
- [ ]{id:hinge after:erm,accuracy} Hinge loss
- [ ]{id:logloss after:ce} Log-loss
- [ ]{id:zeroone after:erm,accuracy} 0/1-loss
- [ ]{id:convexity after:mse,hinge} Выпуклые и невыпуклые функции потерь
- [ ]{r id:surrogate after:convexity,zeroone} Суррогатные функции потерь и их согласованность
- [ ]{r id:bayesrisk after:zeroone,bayes} Байесовский риск и байес-оптимальный классификатор
- [ ]{r id:costsens after:zeroone} Cost-sensitive / асимметричные функции потерь


## Валидация и разбиение данных

- [ ]{id:tvt after:gen} Train / validation / test split
- [ ]{id:kfold after:tvt} K-fold cross-validation
- [ ]{id:stratkfold after:kfold} Stratified k-fold
- [ ]{id:loo after:kfold} Leave-one-out
- [ ]{id:tssplit after:tvt} Time series split
- [ ]{id:leak after:tvt} Data leakage
- [ ]{r id:bootstrap632 after:kfold} Bootstrap-оценка (.632 estimator)
- [ ]{r id:conformal after:tvt} Conformal prediction
- [ ]{r id:groupcv after:kfold} Групповая / пространственная кросс-валидация (не-i.i.d. данные)


## Регуляризация

- [ ]{id:l1 after:overfit} L1-регуляризация (Lasso)
- [ ]{id:l2 after:overfit} L2-регуляризация (Ridge)
- [ ]{id:elastic after:l1,l2} Elastic Net
- [ ]{id:earlystop after:overfit,lc} Ранняя остановка (early stopping)
- [ ]{id:map after:mle,bayes} Maximum A Posteriori (MAP)
- [ ]{r id:dropout after:l2,bayes} Dropout как приближённый байесовский вывод
- [ ]{r id:dataaug after:overfit} Аугментация данных как неявная регуляризация
- [ ]{r id:implicitreg after:overfit} Имплицитная регуляризация в переобученных моделях


## Подбор гиперпараметров

- [ ]{id:grid after:kfold} Grid search
- [ ]{id:random after:kfold} Random search
- [ ]{id:bayesopt after:random,bayes} Bayesian optimization
- [ ]{id:nestedcv after:kfold,metric} Nested cross-validation
- [ ]{r id:multifidelity after:bayesopt} Multi-fidelity оптимизация (Hyperband, successive halving)
- [ ]{r id:pbt after:bayesopt} Population-based training
- [ ]{r id:automl after:bayesopt} AutoML / Neural Architecture Search (обзорно)
