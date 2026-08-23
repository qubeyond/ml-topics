# NLP

## Часть I. Классическая обработка текста

### I.1 Предобработка текста
- [ ] I.1.1 Токенизация (word-level)
- [ ] I.1.2 Нормализация регистра, стемминг vs лемматизация
- [ ] I.1.3 Стоп-слова
- [ ] I.1.4 N-граммы (unigram/bigram/trigram)

### I.2 Классические представления текста
- [ ] I.2.1 Bag-of-Words
- [ ] I.2.2 TF-IDF
- [ ] I.2.3 Ограничения BoW/TF-IDF

### I.3 N-граммные языковые модели
- [ ] I.3.1 Вероятность последовательности через условные вероятности n-грамм
- [ ] I.3.2 Проблема нулевых частот и сглаживание
- [ ] I.3.3 Laplace / Kneser-Ney сглаживание

### I.4 Классические word-эмбеддинги
- [ ] I.4.1 Word2Vec (CBOW и Skip-gram, negative sampling)
- [ ] I.4.2 GloVe
- [ ] I.4.3 FastText

### I.5 Seq2seq до трансформеров
- [ ] I.5.1 Encoder-decoder на RNN
- [ ] I.5.2 Bottleneck-проблема
- [ ] I.5.3 Attention в seq2seq (Bahdanau, Luong)


## Часть II. Трансформер в NLP

### II.1 Токенизация: BPE
- [ ] II.1.1 Byte-pair encoding
- [ ] II.1.2 Byte-level BPE (GPT-2/GPT-3)

### II.2 Токенизация: альтернативы BPE
- [ ] II.2.1 WordPiece
- [ ] II.2.2 SentencePiece
- [ ] II.2.3 Unigram LM tokenizer

### II.3 Эмбеддинги на входе трансформера
- [ ] II.3.1 Token embeddings
- [ ] II.3.2 Positional encoding (суммирование)
- [ ] II.3.3 Weight tying

### II.4 Архитектурные решения под задачи языка
- [ ] II.4.1 Encoder-only (BERT)
- [ ] II.4.2 Decoder-only (GPT)
- [ ] II.4.3 Encoder-decoder (T5, BART)

### II.5 Masked Language Modeling
- [ ] II.5.1 Стратегия маскирования BERT (15%, 80/10/10)
- [ ] II.5.2 Whole word masking

- [ ] II.6 Causal (autoregressive) Language Modeling
### II.7 Другие цели предобучения
- [ ] II.7.1 Span corruption (T5)
- [ ] II.7.2 Next sentence prediction
- [ ] II.7.3 Sentence order prediction (ALBERT)

### II.8 Длинный контекст
- [ ] II.8.1 Квадратичная сложность attention
- [ ] II.8.2 Sparse / sliding window attention
- [ ] II.8.3 Position interpolation / YaRN

### II.9 Мультиязычность
- [ ] II.9.1 Общий словарь токенизатора на несколько языков
- [ ] II.9.2 Cross-lingual transfer


## Часть III. Адаптация и alignment

### III.1 Full fine-tuning
- [ ] III.1.1 Full fine-tuning
- [ ] III.1.2 Catastrophic forgetting

### III.2 LoRA и QLoRA
- [ ] III.2.1 LoRA (rank, alpha, target modules)
- [ ] III.2.2 QLoRA

### III.3 Другие PEFT-методы
- [ ] III.3.1 Prefix-tuning / prompt-tuning
- [ ] III.3.2 Adapter layers

### III.4 Instruction tuning
- [ ] III.4.1 Instruction tuning
- [ ] III.4.2 Base vs instruct модель

### III.5 RLHF
- [ ] III.5.1 Reward model
- [ ] III.5.2 PPO с KL-штрафом
- [ ] III.5.3 Пайплайн pretraining → SFT → RLHF

### III.6 DPO и альтернативы RLHF
- [ ] III.6.1 DPO
- [ ] III.6.2 IPO, KTO

### III.7 In-context learning и промптинг
- [ ] III.7.1 Zero-shot / few-shot
- [ ] III.7.2 Chain-of-thought
- [ ] III.7.3 Self-consistency


## Часть IV. RAG и агенты

### IV.1 Эмбеддинги для поиска
- [ ] IV.1.1 Sentence embeddings
- [ ] IV.1.2 Bi-encoder vs cross-encoder

### IV.2 Векторные базы и индексация
- [ ] IV.2.1 ANN (приближённый поиск соседей)
- [ ] IV.2.2 HNSW / IVF

### IV.3 Чанкинг документов
- [ ] IV.3.1 Fixed-size chunking с overlap
- [ ] IV.3.2 Semantic chunking

### IV.4 Hybrid search и re-ranking
- [ ] IV.4.1 BM25
- [ ] IV.4.2 Reciprocal rank fusion
- [ ] IV.4.3 Re-ranking cross-encoder'ом

### IV.5 Продвинутые паттерны RAG (обзорно)
- [ ] IV.5.1 Query rewriting / expansion
- [ ] IV.5.2 HyDE
- [ ] IV.5.3 GraphRAG

### IV.6 Function calling и tool use
- [ ] IV.6.1 Механика вызова функций моделью
- [ ] IV.6.2 Native tool use vs prompt-эмуляция

### IV.7 ReAct и планирование
- [ ] IV.7.1 Паттерн ReAct
- [ ] IV.7.2 Декомпозиция задачи

### IV.8 Память агента
- [ ] IV.8.1 Short-term vs long-term память
- [ ] IV.8.2 Суммаризация истории

### IV.9 Мультиагентные системы (обзорно)
- [ ] IV.9.1 Роли planner/executor/critic
- [ ] IV.9.2 Оркестрация


## Часть V. Мультимодальность (обзорно)

- [ ] V.1 Связь текста и изображения
- [ ] V.2 Мультимодальные LLM

## Часть VI. Оценка, инференс и инструменты

### VI.1 Классические метрики NLP
- [ ] VI.1.1 BLEU / ROUGE
- [ ] VI.1.2 Perplexity

### VI.2 Оценка LLM
- [ ] VI.2.1 MMLU, HellaSwag, TruthfulQA
- [ ] VI.2.2 LLM-as-judge
- [ ] VI.2.3 Data contamination

### VI.3 Инференс-оптимизация LLM
- [ ] VI.3.1 KV-cache
- [ ] VI.3.2 GPTQ / AWQ
- [ ] VI.3.3 Speculative decoding
- [ ] VI.3.4 Continuous batching (PagedAttention/vLLM)

### VI.4 Классические NLP-задачи (ландшафт)
- [ ] VI.4.1 NER, POS-tagging
- [ ] VI.4.2 Sentiment analysis, MT, summarization, QA

### VI.5 Инструменты (NLP)
- [ ] VI.5.1 Hugging Face (transformers, tokenizers, datasets, peft, accelerate)
- [ ] VI.5.2 sentence-transformers
- [ ] VI.5.3 spaCy / NLTK
- [ ] VI.5.4 LangChain / LlamaIndex
- [ ] VI.5.5 FAISS / Chroma / Pinecone / Qdrant
- [ ] VI.5.6 vLLM / TGI
