## Classical Text Processing

### Text Preprocessing

- [ ] Word-level
- [ ] Case normalization, stemming vs lemmatization
- [ ] Stop words
- [ ] Unigram/bigram/trigram

### Classical Text Representations

- [ ] Bag-of-Words
- [ ] TF-IDF
- [ ] Limitations of BoW/TF-IDF

### N-Gram Language Models

- [ ] Sequence probability via n-gram conditional probabilities
- [ ] The zero-frequency problem and smoothing
- [ ] Laplace / Kneser-Ney smoothing

### Classical Word Embeddings

- [ ] Word2Vec (CBOW and Skip-gram, negative sampling)
- [ ] GloVe
- [ ] FastText

### Seq2Seq Before Transformers

- [ ] Encoder-decoder on RNNs
- [ ] The bottleneck problem
- [ ] Bahdanau, Luong

- [ ] Https://stepik.org/course/272087/


## Tokenization and Input Representation

### Tokenization: BPE

- [ ] Byte-pair encoding
- [ ] Byte-level BPE (GPT-2/GPT-3)

### Tokenization: Alternatives to BPE

- [ ] WordPiece
- [ ] SentencePiece
- [ ] Unigram LM tokenizer

### Embeddings at the Transformer Input

- [ ] Token embeddings
- [ ] Positional encoding (added to embeddings)
- [ ] Weight tying

### Architecture Choices for Language Tasks

- [ ] Encoder-only (BERT)
- [ ] Decoder-only (GPT)
- [ ] Encoder-decoder (T5, BART)


## Pretraining and Long Context

### Masked Language Modeling

- [ ] 15%, 80/10/10
- [ ] Whole word masking

- [ ] Causal (autoregressive) Language Modeling

### Other Pretraining Objectives

- [ ] Span corruption (T5)
- [ ] Next sentence prediction
- [ ] Sentence order prediction (ALBERT)

### Long Context

- [ ] Quadratic complexity of attention
- [ ] Sparse / sliding window attention
- [ ] Position interpolation / YaRN

### Multilinguality

- [ ] A shared tokenizer vocabulary across languages
- [ ] Cross-lingual transfer


## Adaptation and Alignment

### Full fine-tuning

- [ ] Full fine-tuning
- [ ] Catastrophic forgetting

### LoRA and QLoRA

- [ ] LoRA (rank, alpha, target modules)
- [ ] QLoRA

### Other PEFT Methods

- [ ] Prefix-tuning / prompt-tuning
- [ ] Adapter layers

### Instruction tuning

- [ ] Instruction tuning
- [ ] Base vs instruct model

### RLHF

- [ ] Reward model
- [ ] PPO with a KL penalty
- [ ] The pretraining → SFT → RLHF pipeline

### DPO and Alternatives to RLHF

- [ ] DPO
- [ ] IPO, KTO

### In-Context Learning and Prompting

- [ ] Zero-shot / few-shot
- [ ] Chain-of-thought
- [ ] Self-consistency


## RAG: Search and Retrieval

### Embeddings for Search

- [ ] Sentence embeddings
- [ ] Bi-encoder vs cross-encoder

### Vector Databases and Indexing

- [ ] ANN (approximate nearest neighbors)
- [ ] HNSW / IVF

### Document Chunking

- [ ] Fixed-size chunking with overlap
- [ ] Semantic chunking

### Hybrid Search and Re-Ranking

- [ ] BM25
- [ ] Reciprocal rank fusion
- [ ] Re-ranking with a cross-encoder

### Advanced RAG Patterns (Overview)

- [ ] Query rewriting / expansion
- [ ] HyDE
- [ ] GraphRAG


## Agents: Tools and Orchestration

### Function Calling and Tool Use

- [ ] Function calling
- [ ] Native tool use vs prompt emulation

### ReAct and Planning

- [ ] The ReAct pattern
- [ ] Task decomposition

### Agent Memory

- [ ] Short-term vs long-term memory
- [ ] Summarizing history

### Multi-Agent Systems (Overview)

- [ ] Planner/executor/critic roles
- [ ] Orchestration


## Multimodality (Overview)

- [ ] Connecting text and images
- [ ] Multimodal LLMs


## Evaluation, Inference, and Tools

### Classical NLP Metrics

- [ ] BLEU / ROUGE
- [ ] Perplexity

### Evaluating LLMs

- [ ] MMLU, HellaSwag, TruthfulQA
- [ ] LLM-as-judge
- [ ] Data contamination

### LLM Inference Optimization

- [ ] KV-cache
- [ ] GPTQ / AWQ
- [ ] Speculative decoding
- [ ] Continuous batching (PagedAttention/vLLM)

### Classical NLP Tasks (Landscape)

- [ ] NER, POS-tagging
- [ ] Sentiment analysis, MT, summarization, QA

### Tools (NLP)

- [ ] Hugging Face (transformers, tokenizers, datasets, peft, accelerate)
- [ ] sentence-transformers
- [ ] spaCy / NLTK
- [ ] LangChain / LlamaIndex
- [ ] FAISS / Chroma / Pinecone / Qdrant
- [ ] vLLM / TGI
