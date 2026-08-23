## Классическая обработка текста

### Предобработка текста

- [ ] Токенизация (word-level)
- [ ] Нормализация регистра, стемминг vs лемматизация
- [ ] Стоп-слова
- [ ] N-граммы (unigram/bigram/trigram)

### Классические представления текста

- [ ] Bag-of-Words
- [ ] TF-IDF
- [ ] Ограничения BoW/TF-IDF

### N-граммные языковые модели

- [ ] Вероятность последовательности через условные вероятности n-грамм
- [ ] Проблема нулевых частот и сглаживание
- [ ] Laplace / Kneser-Ney сглаживание

### Классические word-эмбеддинги

- [ ] Word2Vec (CBOW и Skip-gram, negative sampling)
- [ ] GloVe
- [ ] FastText

### Seq2seq до трансформеров

- [ ] Encoder-decoder на RNN
- [ ] Bottleneck-проблема
- [ ] Attention в seq2seq (Bahdanau, Luong)


## Токенизация и представление входа

### Токенизация: BPE

- [ ] Byte-pair encoding
- [ ] Byte-level BPE (GPT-2/GPT-3)

### Токенизация: альтернативы BPE

- [ ] WordPiece
- [ ] SentencePiece
- [ ] Unigram LM tokenizer

### Эмбеддинги на входе трансформера

- [ ] Token embeddings
- [ ] Positional encoding (суммирование)
- [ ] Weight tying

### Архитектурные решения под задачи языка

- [ ] Encoder-only (BERT)
- [ ] Decoder-only (GPT)
- [ ] Encoder-decoder (T5, BART)


## Предобучение и длинный контекст

### Masked Language Modeling

- [ ] Стратегия маскирования BERT (15%, 80/10/10)
- [ ] Whole word masking

- [ ] Causal (autoregressive) Language Modeling

### Другие цели предобучения

- [ ] Span corruption (T5)
- [ ] Next sentence prediction
- [ ] Sentence order prediction (ALBERT)

### Длинный контекст

- [ ] Квадратичная сложность attention
- [ ] Sparse / sliding window attention
- [ ] Position interpolation / YaRN

### Мультиязычность

- [ ] Общий словарь токенизатора на несколько языков
- [ ] Cross-lingual transfer


## Адаптация и alignment

### Full fine-tuning

- [ ] Full fine-tuning
- [ ] Catastrophic forgetting

### LoRA и QLoRA

- [ ] LoRA (rank, alpha, target modules)
- [ ] QLoRA

### Другие PEFT-методы

- [ ] Prefix-tuning / prompt-tuning
- [ ] Adapter layers

### Instruction tuning

- [ ] Instruction tuning
- [ ] Base vs instruct модель

### RLHF

- [ ] Reward model
- [ ] PPO с KL-штрафом
- [ ] Пайплайн pretraining → SFT → RLHF

### DPO и альтернативы RLHF

- [ ] DPO
- [ ] IPO, KTO

### In-context learning и промптинг

- [ ] Zero-shot / few-shot
- [ ] Chain-of-thought
- [ ] Self-consistency


## RAG: поиск и retrieval

### Эмбеддинги для поиска

- [ ] Sentence embeddings
- [ ] Bi-encoder vs cross-encoder

### Векторные базы и индексация

- [ ] ANN (приближённый поиск соседей)
- [ ] HNSW / IVF

### Чанкинг документов

- [ ] Fixed-size chunking с overlap
- [ ] Semantic chunking

### Hybrid search и re-ranking

- [ ] BM25
- [ ] Reciprocal rank fusion
- [ ] Re-ranking cross-encoder'ом

### Продвинутые паттерны RAG (обзорно)

- [ ] Query rewriting / expansion
- [ ] HyDE
- [ ] GraphRAG


## Агенты: инструменты и оркестрация

### Function calling и tool use

- [ ] Механика вызова функций моделью (function calling)
- [ ] Native tool use vs prompt-эмуляция

### ReAct и планирование

- [ ] Паттерн ReAct
- [ ] Декомпозиция задачи

### Память агента

- [ ] Short-term vs long-term память
- [ ] Суммаризация истории

### Мультиагентные системы (обзорно)

- [ ] Роли planner/executor/critic
- [ ] Оркестрация


## Мультимодальность (обзорно)

- [ ] Связь текста и изображения
- [ ] Мультимодальные LLM


## Оценка, инференс и инструменты

### Классические метрики NLP

- [ ] BLEU / ROUGE
- [ ] Perplexity

### Оценка LLM

- [ ] MMLU, HellaSwag, TruthfulQA
- [ ] LLM-as-judge
- [ ] Data contamination

### Инференс-оптимизация LLM

- [ ] KV-cache
- [ ] GPTQ / AWQ
- [ ] Speculative decoding
- [ ] Continuous batching (PagedAttention/vLLM)

### Классические NLP-задачи (ландшафт)

- [ ] NER, POS-tagging
- [ ] Sentiment analysis, MT, summarization, QA

### Инструменты (NLP)

- [ ] Hugging Face (transformers, tokenizers, datasets, peft, accelerate)
- [ ] sentence-transformers
- [ ] spaCy / NLTK
- [ ] LangChain / LlamaIndex
- [ ] FAISS / Chroma / Pinecone / Qdrant
- [ ] vLLM / TGI
