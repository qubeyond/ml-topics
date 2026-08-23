## Network Basics: From Perceptron to Backprop

### Perceptrons and Multilayer Networks

- [ ] Activation functions
- [ ] Universal approximation theorem
- [ ] Why nonlinearity between layers is needed

### Backprop and Autograd

- [ ] Computational graph
- [ ] Chain rule
- [ ] Forward pass / backward pass
- [ ] Autodiff

### Weight Initialization

- [ ] The symmetry problem with zero initialization
- [ ] Xavier/Glorot init
- [ ] He init


## Optimization, Normalization, and Regularization

### Evolution of Optimizers

- [ ] SGD / momentum / Nesterov
- [ ] Adagrad / RMSProp
- [ ] Adam / AdamW
- [ ] Learning rate schedules

### Evolution of Normalization

- [ ] Internal covariate shift
- [ ] BatchNorm
- [ ] LayerNorm
- [ ] GroupNorm / RMSNorm

### Regularization in Deep Networks

- [ ] Dropout / DropConnect
- [ ] Weight decay, label smoothing
- [ ] Augmentation, mixup/cutmix

### Loss Functions in DL

- [ ] Cross-entropy / MSE
- [ ] Focal loss
- [ ] Contrastive loss / triplet loss


## Deep Learning Engineering

### Training Problems in Deep Networks

- [ ] Vanishing / exploding gradient
- [ ] Gradient clipping
- [ ] Residual connections (skip connections)
- [ ] Dead ReLU problem

### Training Large Models — Engineering Mechanics

- [ ] Mixed precision training (fp16/bf16)
- [ ] Gradient accumulation
- [ ] Gradient checkpointing
- [ ] Data / model / pipeline parallelism

### Transfer Learning and Self-Supervised Learning

- [ ] Pretraining vs fine-tuning
- [ ] Transfer learning
- [ ] Contrastive learning / masked prediction


## Architecture Landscape (Overview)

### Convolutional Networks (CNN)

- [ ] Convolution / pooling
- [ ] Receptive field
- [ ] ResNet and skip connections

### Recurrent Networks (RNN/LSTM/GRU)

- [ ] The idea of recurrence
- [ ] LSTM (gates: forget/input/output)
- [ ] GRU

### Generative Models (Landscape)

- [ ] Autoencoder / latent space
- [ ] VAE
- [ ] GAN
- [ ] Diffusion models


## Attention Mechanics and Positional Encodings

### Scaled dot-product attention

- [ ] Query, Key, Value
- [ ] Scaling by 1/√d_k
- [ ] Row-wise softmax, weighted sum of Value

### Multi-head attention

- [ ] Several heads instead of one
- [ ] Concatenation and the W_O projection

### Self-attention vs cross-attention

- [ ] Self-attention
- [ ] Cross-attention

- [ ] Causal mask

### Positional Encodings: Absolute

- [ ] Sinusoidal positional encoding
- [ ] Learned positional embeddings

### Positional Encodings: Relative

- [ ] RoPE
- [ ] ALiBi


## Assembling the Transformer and Scaling

- [ ] The feed-forward sublayer

### Residual Connections and Normalization Order

- [ ] Residual stream
- [ ] Pre-LN vs post-LN

- [ ] Assembling the block and the full model
- [ ] Architecture families

### Scaling Transformers

- [ ] Scaling laws
- [ ] Compute-optimal training (Chinchilla)

- [ ] Taking the architecture beyond text


## Inference, Optimization, and Tools

### Model Compression and Acceleration

- [ ] Int8/int4
- [ ] Pruning
- [ ] Knowledge distillation

- [ ] Deployment formats

### Ecosystem Tools (DL)

- [ ] PyTorch
- [ ] TensorFlow/Keras
- [ ] Weights & Biases / MLflow
