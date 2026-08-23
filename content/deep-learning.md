# Deep Learning

## Часть I. Механика нейросетей — сквозная теория

### I.1 Персептрон и многослойные сети
- [ ] Функции активации
- [ ] Universal approximation theorem
- [ ] Зачем нужна нелинейность между слоями

### I.2 Backprop и autograd
- [ ] Computational graph
- [ ] Chain rule
- [ ] Forward pass / backward pass
- [ ] Автоматическое дифференцирование

### I.3 Инициализация весов
- [ ] Проблема симметрии при нулевой инициализации
- [ ] Xavier/Glorot init
- [ ] He init

### I.4 Эволюция оптимизаторов
- [ ] SGD / momentum / Nesterov
- [ ] Adagrad / RMSProp
- [ ] Adam / AdamW
- [ ] Расписания learning rate

### I.5 Эволюция нормализации
- [ ] Internal covariate shift
- [ ] BatchNorm
- [ ] LayerNorm
- [ ] GroupNorm / RMSNorm

### I.6 Регуляризация в глубоких сетях
- [ ] Dropout / DropConnect
- [ ] Weight decay, label smoothing
- [ ] Аугментация, mixup/cutmix

### I.7 Функции потерь в DL
- [ ] Cross-entropy / MSE
- [ ] Focal loss
- [ ] Contrastive loss / triplet loss

### I.8 Проблемы обучения глубоких сетей
- [ ] Vanishing / exploding gradient
- [ ] Gradient clipping
- [ ] Residual connections (skip connections)
- [ ] Dead ReLU problem

### I.9 Обучение больших моделей — инженерная механика
- [ ] Mixed precision training (fp16/bf16)
- [ ] Gradient accumulation
- [ ] Gradient checkpointing
- [ ] Data / model / pipeline parallelism

### I.10 Перенос обучения и self-supervised learning
- [ ] Pretraining vs fine-tuning
- [ ] Transfer learning
- [ ] Contrastive learning / masked prediction


## Часть II. Архитектурный ландшафт (обзорно)

### II.1 Свёрточные сети (CNN)
- [ ] Convolution / pooling
- [ ] Receptive field
- [ ] ResNet и skip connections

### II.2 Рекуррентные сети (RNN/LSTM/GRU)
- [ ] Идея рекуррентности
- [ ] LSTM (gates: forget/input/output)
- [ ] GRU

### II.3 Генеративные модели (ландшафт)
- [ ] Autoencoder / latent space
- [ ] VAE
- [ ] GAN
- [ ] Diffusion models


## Часть III. Attention и трансформер — общая архитектура

### III.1 Scaled dot-product attention
- [ ] Query, Key, Value
- [ ] Масштабирование 1/√d_k
- [ ] Softmax по строкам, взвешенная сумма Value

### III.2 Multi-head attention
- [ ] Несколько голов вместо одной
- [ ] Конкатенация и проекция W_O

### III.3 Self-attention vs cross-attention
- [ ] Self-attention
- [ ] Cross-attention

- [ ] III.4 Причинная маска (causal mask)
### III.5 Позиционные кодировки: абсолютные
- [ ] Sinusoidal positional encoding
- [ ] Learned positional embeddings

### III.6 Позиционные кодировки: относительные
- [ ] RoPE
- [ ] ALiBi

- [ ] III.7 Feed-forward подслой
### III.8 Residual connections и порядок нормализации
- [ ] Residual stream
- [ ] Pre-LN vs post-LN

- [ ] III.9 Сборка блока и всей модели
- [ ] III.10 Архитектурные семейства
### III.11 Масштабирование трансформеров
- [ ] Scaling laws
- [ ] Compute-optimal training (Chinchilla)

- [ ] III.12 Перенос архитектуры за пределы текста

## Часть IV. Инференс, оптимизация и инструменты

### IV.1 Сжатие и ускорение моделей
- [ ] Квантизация (int8/int4)
- [ ] Pruning
- [ ] Knowledge distillation

- [ ] IV.2 Форматы деплоя
### IV.3 Инструменты экосистемы (DL)
- [ ] PyTorch
- [ ] TensorFlow/Keras
- [ ] Weights & Biases / MLflow
