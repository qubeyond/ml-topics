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
- [ ]{id:localmin after:batchgd} Локальные минимумы
- [ ]{id:globalmin after:localmin} Глобальные минимумы
- [ ]{id:lr after:batchgd} Learning rate
- [ ]{r id:srm after:erm} Structural risk minimization
- [ ]{r id:saddle after:localmin} Седловые точки в многомерной оптимизации
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
- [ ]{id:bias after:overfit,underfit} Смещение (bias)
- [ ]{id:variance after:overfit,underfit} Разброс (variance)
- [ ]{id:lc after:bias,variance} Learning curves
- [ ]{id:irr after:bias,variance} Irreducible error
- [ ]{id:vc after:gen} VC-размерность
- [ ]{id:nfl after:gen} No Free Lunch theorem
- [ ]{r id:pac after:vc} PAC learning
- [ ]{r id:radem after:vc} Сложность Радемахера
- [ ]{r id:doubledesc after:bias,variance} Феномен double descent
- [ ]{r id:algstab after:gen} Алгоритмическая устойчивость


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
- [ ]{r id:surrogate after:convex,zeroone} Суррогатные функции потерь и их согласованность
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


## Метрики качества

- [ ]{id:metric after:gen} Что такое метрика и зачем нужны разные метрики под разные задачи
- [ ]{id:metricvsloss after:metric,erm} Чем метрика отличается от функции потерь
- [ ]{r id:properscoring after:metric} Proper scoring rules
- [ ]{r id:calibration after:metric} Калибровка вероятностных предсказаний
- [ ]{r id:pareto after:metricvsloss} Многокритериальное / Парето-оптимальное сравнение моделей


## Подбор гиперпараметров

- [ ]{id:grid after:kfold} Grid search
- [ ]{id:random after:kfold} Random search
- [ ]{id:bayesopt after:random,bayes} Bayesian optimization
- [ ]{id:nestedcv after:kfold,metric} Nested cross-validation
- [ ]{r id:multifidelity after:bayesopt} Multi-fidelity оптимизация (Hyperband, successive halving)
- [ ]{r id:pbt after:bayesopt} Population-based training
- [ ]{r id:automl after:bayesopt} AutoML / Neural Architecture Search (обзорно)
