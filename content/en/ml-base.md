## What Machine Learning Is

- [ ]{id:sup} Supervised learning
- [ ]{id:unsup} Unsupervised learning
- [ ]{id:semisup after:sup,unsup} Semi-supervised learning
- [ ]{id:selfsup after:unsup} Self-supervised learning
- [ ]{id:rl} Reinforcement learning
- [ ]{id:hyp} Hypothesis space
- [ ]{id:indbias after:hyp} Inductive bias
- [ ]{id:param after:hyp} Parametric models
- [ ]{id:nonparam after:hyp} Non-parametric models
- [ ]{r id:meta after:hyp} Meta-learning (learning to learn)
- [ ]{r id:online after:sgd} Online learning
- [ ]{r id:multitask after:sup} Multi-task learning
- [ ]{r id:federated after:sgd} Federated learning


## Fitting a Model: Minimizing Error

- [ ]{id:erm after:sup,hyp} Empirical risk minimization
- [ ]{id:iid after:erm} i.i.d. assumption
- [ ]{id:batchgd after:erm} Batch gradient descent
- [ ]{id:sgd after:batchgd} Stochastic gradient descent
- [ ]{id:minibatchgd after:sgd} Mini-batch gradient descent
- [ ]{id:localmin after:batchgd} Local minima
- [ ]{id:globalmin after:localmin} Global minima
- [ ]{id:lr after:batchgd} Learning rate
- [ ]{r id:srm after:erm} Structural risk minimization
- [ ]{r id:saddle after:localmin} Saddle points in high-dimensional optimization
- [ ]{r id:convrate after:lr} Convergence rates of gradient descent


## A Probabilistic View: Likelihood

- [ ]{id:freq} Frequentist approach
- [ ]{id:bayes} Bayesian approach
- [ ]{id:mle after:freq,erm} Maximum Likelihood Estimation (MLE)
- [ ]{r id:moments after:mle} Method of moments
- [ ]{r id:expfam after:mle} Exponential family and generalized linear models
- [ ]{r id:fisher after:mle} Fisher information and the Cramér-Rao bound


## Generalization

- [ ]{id:gen after:erm} Generalization
- [ ]{id:overfit after:gen} Overfitting
- [ ]{id:underfit after:gen} Underfitting
- [ ]{id:bias after:overfit,underfit} Bias
- [ ]{id:variance after:overfit,underfit} Variance
- [ ]{id:lc after:bias,variance} Learning curves
- [ ]{id:irr after:bias,variance} Irreducible error
- [ ]{id:vc after:gen} VC dimension
- [ ]{id:nfl after:gen} No Free Lunch theorem
- [ ]{r id:pac after:vc} PAC learning
- [ ]{r id:radem after:vc} Rademacher complexity
- [ ]{r id:doubledesc after:bias,variance} Double descent phenomenon
- [ ]{r id:algstab after:gen} Algorithmic stability


## Loss Functions

- [ ]{id:mse after:erm} MSE
- [ ]{id:mae after:erm} MAE
- [ ]{id:huber after:mse,mae} Huber loss
- [ ]{id:ce after:mle} Cross-entropy
- [ ]{id:hinge after:erm} Hinge loss
- [ ]{id:logloss after:ce} Log-loss
- [ ]{id:zeroone after:erm} 0/1 loss
- [ ]{id:convex after:mse,hinge} Convex loss functions
- [ ]{id:nonconvex after:convex} Non-convex loss functions
- [ ]{r id:surrogate after:convex,zeroone} Surrogate loss functions and consistency
- [ ]{r id:bayesrisk after:zeroone,bayes} Bayes risk and the Bayes-optimal classifier
- [ ]{r id:costsens after:zeroone} Cost-sensitive / asymmetric loss functions


## Validation and Data Splitting

- [ ]{id:tvt after:gen} Train / validation / test split
- [ ]{id:kfold after:tvt} K-fold cross-validation
- [ ]{id:stratkfold after:kfold} Stratified k-fold
- [ ]{id:loo after:kfold} Leave-one-out
- [ ]{id:tssplit after:tvt} Time series split
- [ ]{id:leak after:tvt} Data leakage
- [ ]{r id:bootstrap632 after:kfold} Bootstrap estimation (.632 estimator)
- [ ]{r id:conformal after:tvt} Conformal prediction
- [ ]{r id:groupcv after:kfold} Group / spatial cross-validation (non-i.i.d. data)


## Regularization

- [ ]{id:l1 after:overfit} L1 regularization (Lasso)
- [ ]{id:l2 after:overfit} L2 regularization (Ridge)
- [ ]{id:elastic after:l1,l2} Elastic Net
- [ ]{id:earlystop after:overfit,lc} Early stopping
- [ ]{id:map after:mle,bayes} Maximum A Posteriori (MAP)
- [ ]{r id:dropout after:l2,bayes} Dropout as approximate Bayesian inference
- [ ]{r id:dataaug after:overfit} Data augmentation as implicit regularization
- [ ]{r id:implicitreg after:overfit} Implicit regularization in overparameterized models


## Quality Metrics

- [ ]{id:metric after:gen} What a metric is and why different tasks need different metrics
- [ ]{id:metricvsloss after:metric,erm} How metrics differ from loss functions
- [ ]{r id:properscoring after:metric} Proper scoring rules
- [ ]{r id:calibration after:metric} Calibration of probabilistic predictions
- [ ]{r id:pareto after:metricvsloss} Multi-objective / Pareto-optimal model comparison


## Hyperparameter Tuning

- [ ]{id:grid after:kfold} Grid search
- [ ]{id:random after:kfold} Random search
- [ ]{id:bayesopt after:random,bayes} Bayesian optimization
- [ ]{id:nestedcv after:kfold,metric} Nested cross-validation
- [ ]{r id:multifidelity after:bayesopt} Multi-fidelity optimization (Hyperband, successive halving)
- [ ]{r id:pbt after:bayesopt} Population-based training
- [ ]{r id:automl after:bayesopt} AutoML / Neural Architecture Search (overview)
