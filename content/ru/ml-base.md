## Что такое машинное обучение

- [ ]{id:sup} Обучение с учителем
- [ ]{id:unsup} Обучение без учителя
- [ ]{id:semisup after:sup,unsup} Полу-контролируемое обучение
- [ ]{id:selfsup after:unsup} Self-supervised обучение
- [ ]{id:rl} Обучение с подкреплением
- [ ]{id:hyp} Пространство гипотез
- [ ]{id:indbias after:hyp} Индуктивное смещение
- [ ]{id:param after:hyp} Параметрические модели
- [ ]{id:nonparam after:hyp} Непараметрические модели
- [ ]{r} Meta-learning (обучение обучаться)
- [ ]{r} Online-обучение
- [ ]{r} Multi-task обучение
- [ ]{r} Federated learning


## Подгонка модели: минимизация ошибки

- [ ]{id:erm after:sup,hyp} Empirical risk minimization
- [ ]{id:iid after:erm} i.i.d.-предположение
- [ ]{id:batchgd after:erm} Batch градиентный спуск
- [ ]{id:sgd after:batchgd} Stochastic градиентный спуск
- [ ]{id:minibatchgd after:sgd} Mini-batch градиентный спуск
- [ ]{id:localmin after:batchgd} Локальные минимумы
- [ ]{id:globalmin after:localmin} Глобальные минимумы
- [ ]{id:lr after:batchgd} Learning rate
- [ ]{r} Structural risk minimization
- [ ]{r} Седловые точки в многомерной оптимизации
- [ ]{r} Скорость сходимости градиентного спуска


## Вероятностный взгляд: правдоподобие

- [ ]{id:freq} Frequentist подход
- [ ]{id:bayes} Bayesian подход
- [ ]{id:mle after:freq,erm} Maximum Likelihood Estimation (MLE)
- [ ]{r} Метод моментов
- [ ]{r} Экспоненциальное семейство распределений и обобщённые линейные модели
- [ ]{r} Информация Фишера и неравенство Крамера-Рао


## Обобщающая способность

- [ ]{id:gen after:erm} Generalization
- [ ]{id:overfit after:gen} Overfitting
- [ ]{id:underfit after:gen} Underfitting
- [ ]{id:bias after:overfit,underfit} Смещение (bias)
- [ ]{id:variance after:overfit,underfit} Разброс (variance)
- [ ]{id:lc after:bias,variance} Learning curves
- [ ]{id:irr after:bias,variance} Irreducible error
- [ ]{id:vc after:gen} VC-размерность
- [ ]{id:nfl after:gen} No Free Lunch theorem
- [ ]{r} PAC learning
- [ ]{r} Сложность Радемахера
- [ ]{r} Феномен double descent
- [ ]{r} Алгоритмическая устойчивость


## Функции потерь

- [ ]{id:mse after:erm} MSE
- [ ]{id:mae after:erm} MAE
- [ ]{id:huber after:mse,mae} Huber loss
- [ ]{id:ce after:mle} Cross-entropy
- [ ]{id:hinge after:erm} Hinge loss
- [ ]{id:logloss after:ce} Log-loss
- [ ]{id:zeroone after:erm} 0/1-loss
- [ ]{id:convex after:mse,hinge} Выпуклые функции потерь
- [ ]{id:nonconvex after:convex} Невыпуклые функции потерь
- [ ]{r} Суррогатные функции потерь и их согласованность
- [ ]{r} Байесовский риск и байес-оптимальный классификатор
- [ ]{r} Cost-sensitive / асимметричные функции потерь


## Валидация и разбиение данных

- [ ]{id:tvt after:gen} Train / validation / test split
- [ ]{id:kfold after:tvt} K-fold cross-validation
- [ ]{id:stratkfold after:kfold} Stratified k-fold
- [ ]{id:loo after:kfold} Leave-one-out
- [ ]{id:tssplit after:tvt} Time series split
- [ ]{id:leak after:tvt} Data leakage
- [ ]{r} Bootstrap-оценка (.632 estimator)
- [ ]{r} Conformal prediction
- [ ]{r} Групповая / пространственная кросс-валидация (не-i.i.d. данные)


## Регуляризация

- [ ]{id:l1 after:overfit} L1-регуляризация (Lasso)
- [ ]{id:l2 after:overfit} L2-регуляризация (Ridge)
- [ ]{id:elastic after:l1,l2} Elastic Net
- [ ]{id:earlystop after:overfit,lc} Ранняя остановка (early stopping)
- [ ]{id:map after:mle,bayes} Maximum A Posteriori (MAP)
- [ ]{r} Dropout как приближённый байесовский вывод
- [ ]{r} Аугментация данных как неявная регуляризация
- [ ]{r} Имплицитная регуляризация в переобученных моделях


## Метрики качества

- [ ]{id:metric after:gen} Что такое метрика и зачем нужны разные метрики под разные задачи
- [ ]{id:metricvsloss after:metric,erm} Чем метрика отличается от функции потерь
- [ ]{r} Proper scoring rules
- [ ]{r} Калибровка вероятностных предсказаний
- [ ]{r} Многокритериальное / Парето-оптимальное сравнение моделей


## Подбор гиперпараметров

- [ ]{id:grid after:kfold} Grid search
- [ ]{id:random after:kfold} Random search
- [ ]{id:bayesopt after:random,bayes} Bayesian optimization
- [ ]{id:nestedcv after:kfold,metric} Nested cross-validation
- [ ]{r} Multi-fidelity оптимизация (Hyperband, successive halving)
- [ ]{r} Population-based training
- [ ]{r} AutoML / Neural Architecture Search (обзорно)
