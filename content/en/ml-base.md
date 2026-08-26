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
- [ ]{r} Meta-learning (learning to learn)
- [ ]{r} Online learning
- [ ]{r} Multi-task learning
- [ ]{r} Federated learning


## Fitting a Model: Minimizing Error

- [ ]{id:erm after:sup,hyp} Empirical risk minimization
- [ ]{id:iid after:erm} i.i.d. assumption
- [ ]{id:batchgd after:erm} Batch gradient descent
- [ ]{id:sgd after:batchgd} Stochastic gradient descent
- [ ]{id:minibatchgd after:sgd} Mini-batch gradient descent
- [ ]{id:localmin after:batchgd} Local minima
- [ ]{id:globalmin after:localmin} Global minima
- [ ]{id:lr after:batchgd} Learning rate
- [ ]{r} Structural risk minimization
- [ ]{r} Saddle points in high-dimensional optimization
- [ ]{r} Convergence rates of gradient descent


## A Probabilistic View: Likelihood

- [ ]{id:freq} Frequentist approach
- [ ]{id:bayes} Bayesian approach
- [ ]{id:mle after:freq,erm} Maximum Likelihood Estimation (MLE)
- [ ]{r} Method of moments
- [ ]{r} Exponential family and generalized linear models
- [ ]{r} Fisher information and the Cramér-Rao bound


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
- [ ]{r} PAC learning
- [ ]{r} Rademacher complexity
- [ ]{r} Double descent phenomenon
- [ ]{r} Algorithmic stability


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
- [ ]{r} Surrogate loss functions and consistency
- [ ]{r} Bayes risk and the Bayes-optimal classifier
- [ ]{r} Cost-sensitive / asymmetric loss functions


## Validation and Data Splitting

- [ ]{id:tvt after:gen} Train / validation / test split
- [ ]{id:kfold after:tvt} K-fold cross-validation
- [ ]{id:stratkfold after:kfold} Stratified k-fold
- [ ]{id:loo after:kfold} Leave-one-out
- [ ]{id:tssplit after:tvt} Time series split
- [ ]{id:leak after:tvt} Data leakage
- [ ]{r} Bootstrap estimation (.632 estimator)
- [ ]{r} Conformal prediction
- [ ]{r} Group / spatial cross-validation (non-i.i.d. data)


## Regularization

- [ ]{id:l1 after:overfit} L1 regularization (Lasso)
- [ ]{id:l2 after:overfit} L2 regularization (Ridge)
- [ ]{id:elastic after:l1,l2} Elastic Net
- [ ]{id:earlystop after:overfit,lc} Early stopping
- [ ]{id:map after:mle,bayes} Maximum A Posteriori (MAP)
- [ ]{r} Dropout as approximate Bayesian inference
- [ ]{r} Data augmentation as implicit regularization
- [ ]{r} Implicit regularization in overparameterized models


## Quality Metrics

- [ ]{id:metric after:gen} What a metric is and why different tasks need different metrics
- [ ]{id:metricvsloss after:metric,erm} How metrics differ from loss functions
- [ ]{r} Proper scoring rules
- [ ]{r} Calibration of probabilistic predictions
- [ ]{r} Multi-objective / Pareto-optimal model comparison


## Hyperparameter Tuning

- [ ]{id:grid after:kfold} Grid search
- [ ]{id:random after:kfold} Random search
- [ ]{id:bayesopt after:random,bayes} Bayesian optimization
- [ ]{id:nestedcv after:kfold,metric} Nested cross-validation
- [ ]{r} Multi-fidelity optimization (Hyperband, successive halving)
- [ ]{r} Population-based training
- [ ]{r} AutoML / Neural Architecture Search (overview)
