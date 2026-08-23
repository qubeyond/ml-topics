# NLP

## Часть I. Классическая обработка текста

### I.1 Предобработка текста
- [ ] Токенизация (word-level)
- [ ] Нормализация регистра, стемминг vs лемматизация
- [ ] Стоп-слова
- [ ] N-граммы (unigram/bigram/trigram)

### I.2 Классические представления текста
- [ ] Bag-of-Words
- [ ] TF-IDF
- [ ] Ограничения BoW/TF-IDF

### I.3 N-граммные языковые модели
- [ ] Вероятность последовательности через условные вероятности n-грамм
- [ ] Проблема нулевых частот и сглаживание
- [ ] Laplace / Kneser-Ney сглаживание

### I.4 Классические word-эмбеддинги
- [ ] Word2Vec (CBOW и Skip-gram, negative sampling)
- [ ] GloVe
- [ ] FastText

### I.5 Seq2seq до трансформеров
- [ ] Encoder-decoder на RNN
- [ ] Bottleneck-проблема
- [ ] Attention в seq2seq (Bahdanau, Luong)


## Часть II. Трансформер в NLP

### II.1 Токенизация: BPE
- [ ] Byte-pair encoding
- [ ] Byte-level BPE (GPT-2/GPT-3)

### II.2 Токенизация: альтернативы BPE
- [ ] WordPiece
- [ ] SentencePiece
- [ ] Unigram LM tokenizer

### II.3 Эмбеддинги на входе трансформера
- [ ] Token embeddings
- [ ] Positional encoding (суммирование)
- [ ] Weight tying

### II.4 Архитектурные решения под задачи языка
- [ ] Encoder-only (BERT)
- [ ] Decoder-only (GPT)
- [ ] Encoder-decoder (T5, BART)

### II.5 Masked Language Modeling
- [ ] Стратегия маскирования BERT (15%, 80/10/10)
- [ ] Whole word masking

- [ ] II.6 Causal (autoregressive) Language Modeling
### II.7 Другие цели предобучения
- [ ] Span corruption (T5)
- [ ] Next sentence prediction
- [ ] Sentence order prediction (ALBERT)

### II.8 Длинный контекст
- [ ] Квадратичная сложность attention
- [ ] Sparse / sliding window attention
- [ ] Position interpolation / YaRN

### II.9 Мультиязычность
- [ ] Общий словарь токенизатора на несколько языков
- [ ] Cross-lingual transfer


## Часть III. Адаптация и alignment

### III.1 Full fine-tuning
- [ ] Full fine-tuning
- [ ] Catastrophic forgetting

### III.2 LoRA и QLoRA
- [ ] LoRA (rank, alpha, target modules)
- [ ] QLoRA

### III.3 Другие PEFT-методы
- [ ] Prefix-tuning / prompt-tuning
- [ ] Adapter layers

### III.4 Instruction tuning
- [ ] Instruction tuning
- [ ] Base vs instruct модель

### III.5 RLHF
- [ ] Reward model
- [ ] PPO с KL-штрафом
- [ ] Пайплайн pretraining → SFT → RLHF

### III.6 DPO и альтернативы RLHF
- [ ] DPO
- [ ] IPO, KTO

### III.7 In-context learning и промптинг
- [ ] Zero-shot / few-shot
- [ ] Chain-of-thought
- [ ] Self-consistency


## Часть IV. RAG и агенты

### IV.1 Эмбеддинги для поиска
- [ ] Sentence embeddings
- [ ] Bi-encoder vs cross-encoder

### IV.2 Векторные базы и индексация
- [ ] ANN (приближённый поиск соседей)
- [ ] HNSW / IVF

### IV.3 Чанкинг документов
- [ ] Fixed-size chunking с overlap
- [ ] Semantic chunking

### IV.4 Hybrid search и re-ranking
- [ ] BM25
- [ ] Reciprocal rank fusion
- [ ] Re-ranking cross-encoder'ом

### IV.5 Продвинутые паттерны RAG (обзорно)
- [ ] Query rewriting / expansion
- [ ] HyDE
- [ ] GraphRAG

### IV.6 Function calling и tool use
- [ ] Механика вызова функций моделью
- [ ] Native tool use vs prompt-эмуляция

### IV.7 ReAct и планирование
- [ ] Паттерн ReAct
- [ ] Декомпозиция задачи

### IV.8 Память агента
- [ ] Short-term vs long-term память
- [ ] Суммаризация истории

### IV.9 Мультиагентные системы (обзорно)
- [ ] Роли planner/executor/critic
- [ ] Оркестрация


## Часть V. Мультимодальность (обзорно)

- [ ] V.1 Связь текста и изображения
- [ ] V.2 Мультимодальные LLM

## Часть VI. Оценка, инференс и инструменты

### VI.1 Классические метрики NLP
- [ ] BLEU / ROUGE
- [ ] Perplexity

### VI.2 Оценка LLM
- [ ] MMLU, HellaSwag, TruthfulQA
- [ ] LLM-as-judge
- [ ] Data contamination

### VI.3 Инференс-оптимизация LLM
- [ ] KV-cache
- [ ] GPTQ / AWQ
- [ ] Speculative decoding
- [ ] Continuous batching (PagedAttention/vLLM)

### VI.4 Классические NLP-задачи (ландшафт)
- [ ] NER, POS-tagging
- [ ] Sentiment analysis, MT, summarization, QA

### VI.5 Инструменты (NLP)
- [ ] Hugging Face (transformers, tokenizers, datasets, peft, accelerate)
- [ ] sentence-transformers
- [ ] spaCy / NLTK
- [ ] LangChain / LlamaIndex
- [ ] FAISS / Chroma / Pinecone / Qdrant
- [ ] vLLM / TGI
