## Основы сети: от персептрона до backprop

### Персептрон и многослойные сети

- [ ] Функции активации
- [ ] Universal approximation theorem
- [ ] Зачем нужна нелинейность между слоями

### Backprop и autograd

- [ ] Computational graph
- [ ] Chain rule
- [ ] Forward pass / backward pass
- [ ] Автоматическое дифференцирование (autodiff)

### Инициализация весов

- [ ] Проблема симметрии при нулевой инициализации
- [ ] Xavier/Glorot init
- [ ] He init


## Оптимизация, нормализация и регуляризация

### Эволюция оптимизаторов

- [ ] SGD / momentum / Nesterov
- [ ] Adagrad / RMSProp
- [ ] Adam / AdamW
- [ ] Расписания learning rate

### Эволюция нормализации

- [ ] Internal covariate shift
- [ ] BatchNorm
- [ ] LayerNorm
- [ ] GroupNorm / RMSNorm

### Регуляризация в глубоких сетях

- [ ] Dropout / DropConnect
- [ ] Weight decay, label smoothing
- [ ] Аугментация, mixup/cutmix

### Функции потерь в DL

- [ ] Cross-entropy / MSE
- [ ] Focal loss
- [ ] Contrastive loss / triplet loss


## Инженерия глубокого обучения

### Проблемы обучения глубоких сетей

- [ ] Vanishing / exploding gradient
- [ ] Gradient clipping
- [ ] Residual connections (skip connections)
- [ ] Dead ReLU problem

### Обучение больших моделей — инженерная механика

- [ ] Mixed precision training (fp16/bf16)
- [ ] Gradient accumulation
- [ ] Gradient checkpointing
- [ ] Data / model / pipeline parallelism

### Перенос обучения и self-supervised learning

- [ ] Pretraining vs fine-tuning
- [ ] Transfer learning
- [ ] Contrastive learning / masked prediction


## Архитектурный ландшафт (обзорно)

### Свёрточные сети (CNN)

- [ ] Convolution / pooling
- [ ] Receptive field
- [ ] ResNet и skip connections

### Рекуррентные сети (RNN/LSTM/GRU)

- [ ] Идея рекуррентности
- [ ] LSTM (gates: forget/input/output)
- [ ] GRU

### Генеративные модели (ландшафт)

- [ ] Autoencoder / latent space
- [ ] VAE
- [ ] GAN
- [ ] Diffusion models


## Механика attention и позиционные кодировки

### Scaled dot-product attention

- [ ] Query, Key, Value
- [ ] Масштабирование 1/√d_k
- [ ] Softmax по строкам, взвешенная сумма Value

### Multi-head attention

- [ ] Несколько голов вместо одной
- [ ] Конкатенация и проекция W_O

### Self-attention vs cross-attention

- [ ] Self-attention
- [ ] Cross-attention

- [ ] Причинная маска (causal mask)

### Позиционные кодировки: абсолютные

- [ ] Sinusoidal positional encoding
- [ ] Learned positional embeddings

### Позиционные кодировки: относительные

- [ ] RoPE
- [ ] ALiBi


## Сборка трансформера и масштабирование

- [ ] Feed-forward подслой

### Residual connections и порядок нормализации

- [ ] Residual stream
- [ ] Pre-LN vs post-LN

- [ ] Сборка блока и всей модели
- [ ] Архитектурные семейства

### Масштабирование трансформеров

- [ ] Scaling laws
- [ ] Compute-optimal training (Chinchilla)

- [ ] Перенос архитектуры за пределы текста


## Инференс, оптимизация и инструменты

### Сжатие и ускорение моделей

- [ ] Квантизация (int8/int4)
- [ ] Pruning
- [ ] Knowledge distillation

- [ ] Форматы деплоя

### Инструменты экосистемы (DL)

- [ ] PyTorch
- [ ] TensorFlow/Keras
- [ ] Weights & Biases / MLflow
