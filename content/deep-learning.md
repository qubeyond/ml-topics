# Deep Learning

## Часть I. Механика нейросетей — сквозная теория

### I.1 Персептрон и многослойные сети
- [ ] I.1.1 Функции активации
- [ ] I.1.2 Universal approximation theorem
- [ ] I.1.3 Зачем нужна нелинейность между слоями

### I.2 Backprop и autograd
- [ ] I.2.1 Computational graph
- [ ] I.2.2 Chain rule
- [ ] I.2.3 Forward pass / backward pass
- [ ] I.2.4 Автоматическое дифференцирование

### I.3 Инициализация весов
- [ ] I.3.1 Проблема симметрии при нулевой инициализации
- [ ] I.3.2 Xavier/Glorot init
- [ ] I.3.3 He init

### I.4 Эволюция оптимизаторов
- [ ] I.4.1 SGD / momentum / Nesterov
- [ ] I.4.2 Adagrad / RMSProp
- [ ] I.4.3 Adam / AdamW
- [ ] I.4.4 Расписания learning rate

### I.5 Эволюция нормализации
- [ ] I.5.1 Internal covariate shift
- [ ] I.5.2 BatchNorm
- [ ] I.5.3 LayerNorm
- [ ] I.5.4 GroupNorm / RMSNorm

### I.6 Регуляризация в глубоких сетях
- [ ] I.6.1 Dropout / DropConnect
- [ ] I.6.2 Weight decay, label smoothing
- [ ] I.6.3 Аугментация, mixup/cutmix

### I.7 Функции потерь в DL
- [ ] I.7.1 Cross-entropy / MSE
- [ ] I.7.2 Focal loss
- [ ] I.7.3 Contrastive loss / triplet loss

### I.8 Проблемы обучения глубоких сетей
- [ ] I.8.1 Vanishing / exploding gradient
- [ ] I.8.2 Gradient clipping
- [ ] I.8.3 Residual connections (skip connections)
- [ ] I.8.4 Dead ReLU problem

### I.9 Обучение больших моделей — инженерная механика
- [ ] I.9.1 Mixed precision training (fp16/bf16)
- [ ] I.9.2 Gradient accumulation
- [ ] I.9.3 Gradient checkpointing
- [ ] I.9.4 Data / model / pipeline parallelism

### I.10 Перенос обучения и self-supervised learning
- [ ] I.10.1 Pretraining vs fine-tuning
- [ ] I.10.2 Transfer learning
- [ ] I.10.3 Contrastive learning / masked prediction


## Часть II. Архитектурный ландшафт (обзорно)

### II.1 Свёрточные сети (CNN)
- [ ] II.1.1 Convolution / pooling
- [ ] II.1.2 Receptive field
- [ ] II.1.3 ResNet и skip connections

### II.2 Рекуррентные сети (RNN/LSTM/GRU)
- [ ] II.2.1 Идея рекуррентности
- [ ] II.2.2 LSTM (gates: forget/input/output)
- [ ] II.2.3 GRU

### II.3 Генеративные модели (ландшафт)
- [ ] II.3.1 Autoencoder / latent space
- [ ] II.3.2 VAE
- [ ] II.3.3 GAN
- [ ] II.3.4 Diffusion models


## Часть III. Attention и трансформер — общая архитектура

### III.1 Scaled dot-product attention
- [ ] III.1.1 Query, Key, Value
- [ ] III.1.2 Масштабирование 1/√d_k
- [ ] III.1.3 Softmax по строкам, взвешенная сумма Value

### III.2 Multi-head attention
- [ ] III.2.1 Несколько голов вместо одной
- [ ] III.2.2 Конкатенация и проекция W_O

### III.3 Self-attention vs cross-attention
- [ ] III.3.1 Self-attention
- [ ] III.3.2 Cross-attention

- [ ] III.4 Причинная маска (causal mask)
### III.5 Позиционные кодировки: абсолютные
- [ ] III.5.1 Sinusoidal positional encoding
- [ ] III.5.2 Learned positional embeddings

### III.6 Позиционные кодировки: относительные
- [ ] III.6.1 RoPE
- [ ] III.6.2 ALiBi

- [ ] III.7 Feed-forward подслой
### III.8 Residual connections и порядок нормализации
- [ ] III.8.1 Residual stream
- [ ] III.8.2 Pre-LN vs post-LN

- [ ] III.9 Сборка блока и всей модели
- [ ] III.10 Архитектурные семейства
### III.11 Масштабирование трансформеров
- [ ] III.11.1 Scaling laws
- [ ] III.11.2 Compute-optimal training (Chinchilla)

- [ ] III.12 Перенос архитектуры за пределы текста

## Часть IV. Инференс, оптимизация и инструменты

### IV.1 Сжатие и ускорение моделей
- [ ] IV.1.1 Квантизация (int8/int4)
- [ ] IV.1.2 Pruning
- [ ] IV.1.3 Knowledge distillation

- [ ] IV.2 Форматы деплоя
### IV.3 Инструменты экосистемы (DL)
- [ ] IV.3.1 PyTorch
- [ ] IV.3.2 TensorFlow/Keras
- [ ] IV.3.3 Weights & Biases / MLflow
