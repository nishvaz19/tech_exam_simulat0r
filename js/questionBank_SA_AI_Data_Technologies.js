/* ======================================================
SOLUTION ARCHITECT - DATA AND AI TECHNOLOGIES
PART 1 (Questions 1-25)
====================================================== */

const questionBank = [
{
id:1,
difficulty:"easy",
category:"architecture",
question:"What is the primary goal of an Enterprise Data Warehouse?",
options:[
"Serve OLTP transactions",
"Support analytics and reporting",
"Replace application databases",
"Store application logs"
],
answer:1,
explanation:"An Enterprise Data Warehouse (EDW) is optimized for analytics, reporting, and business intelligence."
},

{
id:2,
difficulty:"easy",
category:"architecture",
question:"Which architecture separates compute and storage?",
options:[
"Monolithic",
"Cloud Data Warehouse",
"Client-Server",
"Three-tier"
],
answer:1,
explanation:"Modern cloud warehouses such as Snowflake separate compute and storage independently."
},

{
id:3,
difficulty:"medium",
category:"architecture",
question:"Which architecture pattern is recommended for enterprise analytics platforms?",
options:[
"Monolithic",
"Microservices",
"Peer-to-Peer",
"Desktop Client"
],
answer:1,
explanation:"Microservices improve scalability, deployment flexibility, and independent service evolution."
},

{
id:4,
difficulty:"medium",
category:"architecture",
question:"Which AWS service is commonly used as a Data Lake?",
options:[
"RDS",
"S3",
"DynamoDB",
"EFS"
],
answer:1,
explanation:"Amazon S3 provides highly scalable object storage suitable for data lakes."
},

{
id:5,
difficulty:"easy",
category:"architecture",
question:"Which Azure service stores large-scale analytics data?",
options:[
"Azure Blob Storage",
"Azure SQL",
"Cosmos DB",
"Azure Cache"
],
answer:0,
explanation:"Azure Blob Storage or ADLS Gen2 is commonly used as the storage layer of a modern data platform."
},

{
id:6,
difficulty:"hard",
category:"architecture",
question:"Which architecture best supports AI, BI, streaming, and batch processing together?",
options:[
"Traditional Data Warehouse",
"Lakehouse",
"OLTP Database",
"Data Mart"
],
answer:1,
explanation:"Lakehouse architecture combines the flexibility of data lakes with warehouse capabilities."
},

{
id:7,
difficulty:"medium",
category:"architecture",
question:"Which document is created before implementation begins?",
options:[
"Runbook",
"Solution Architecture Document",
"Incident Report",
"Deployment Log"
],
answer:1,
explanation:"The Solution Architecture Document defines the target architecture, components, and design decisions."
},

{
id:8,
difficulty:"hard",
category:"architecture",
question:"What is the most important responsibility of a Solution Architect?",
options:[
"Writing production code",
"Managing payroll",
"Aligning business requirements with scalable technical solutions",
"Testing UI screens"
],
answer:2,
explanation:"Solution Architects bridge business objectives and technical implementation while ensuring scalability and governance."
},

{
id:9,
difficulty:"easy",
category:"data-modelling",
question:"Who introduced dimensional modelling?",
options:[
"Bill Inmon",
"Ralph Kimball",
"Edgar Codd",
"James Gray"
],
answer:1,
explanation:"Ralph Kimball introduced dimensional modelling using star schemas."
},

{
id:10,
difficulty:"easy",
category:"data-modelling",
question:"Which schema is most commonly used in data warehouses?",
options:[
"Star Schema",
"Network",
"Hierarchical",
"Graph"
],
answer:0,
explanation:"Star schema simplifies reporting and query performance."
},

{
id:11,
difficulty:"medium",
category:"data-modelling",
question:"What is the grain of a fact table?",
options:[
"Index type",
"Level of detail stored",
"Compression ratio",
"Number of dimensions"
],
answer:1,
explanation:"Grain defines the lowest level of detail represented by each fact record."
},

{
id:12,
difficulty:"medium",
category:"data-modelling",
question:"Which fact table records every business transaction?",
options:[
"Snapshot Fact",
"Transaction Fact",
"Aggregate Fact",
"Periodic Fact"
],
answer:1,
explanation:"Transaction fact tables capture each individual event."
},

{
id:13,
difficulty:"medium",
category:"data-modelling",
question:"Which Slowly Changing Dimension preserves history?",
options:[
"Type 0",
"Type 1",
"Type 2",
"Type 3"
],
answer:2,
explanation:"Type 2 creates a new row whenever an attribute changes."
},

{
id:14,
difficulty:"medium",
category:"data-modelling",
question:"Which modelling approach is highly normalized for enterprise integration?",
options:[
"Kimball",
"Inmon",
"Star",
"Galaxy"
],
answer:1,
explanation:"Bill Inmon advocated normalized enterprise data warehouses."
},

{
id:15,
difficulty:"hard",
category:"data-modelling",
question:"Which modelling technique is commonly used for enterprise historical auditing?",
options:[
"Star Schema",
"Snowflake",
"Data Vault",
"OLTP"
],
answer:2,
explanation:"Data Vault provides excellent auditability and scalability."
},

{
id:16,
difficulty:"easy",
category:"sql",
question:"Which SQL statement retrieves records?",
options:[
"UPDATE",
"DELETE",
"SELECT",
"ALTER"
],
answer:2,
explanation:"SELECT retrieves data from relational tables."
},

{
id:17,
difficulty:"easy",
category:"sql",
question:"Which clause filters rows before aggregation?",
options:[
"HAVING",
"WHERE",
"GROUP BY",
"ORDER BY"
],
answer:1,
explanation:"WHERE filters rows before grouping occurs."
},

{
id:18,
difficulty:"medium",
category:"sql",
question:"Which clause filters aggregated results?",
options:[
"WHERE",
"HAVING",
"ORDER BY",
"DISTINCT"
],
answer:1,
explanation:"HAVING filters groups after aggregation."
},

{
id:19,
difficulty:"medium",
category:"sql",
question:"Which window function assigns unique sequential numbers?",
options:[
"RANK",
"DENSE_RANK",
"ROW_NUMBER",
"LEAD"
],
answer:2,
explanation:"ROW_NUMBER always generates unique sequential values."
},

{
id:20,
difficulty:"hard",
category:"sql",
question:"Which technique usually provides the biggest SQL performance improvement?",
options:[
"Using SELECT *",
"Proper indexing",
"Adding comments",
"Using VARCHAR(MAX)"
],
answer:1,
explanation:"Well-designed indexes significantly reduce query execution time."
},

{
id:21,
difficulty:"medium",
category:"python",
question:"Which keyword creates a generator?",
options:[
"yield",
"return",
"pass",
"async"
],
answer:0,
explanation:"yield produces values lazily, creating a generator."
},

{
id:22,
difficulty:"medium",
category:"python",
question:"Which Python feature allows modifying function behaviour without changing its code?",
options:[
"Lambda",
"Decorator",
"Generator",
"Iterator"
],
answer:1,
explanation:"Decorators wrap existing functions to extend functionality."
},

{
id:23,
difficulty:"easy",
category:"python",
question:"Which data structure is immutable?",
options:[
"List",
"Dictionary",
"Tuple",
"Set"
],
answer:2,
explanation:"Tuples cannot be modified after creation."
},

{
id:24,
difficulty:"hard",
category:"python",
question:"Why is multiprocessing preferred over multithreading for CPU-intensive tasks?",
options:[
"Threads consume less memory",
"Processes bypass Python's GIL",
"Threads are slower",
"Processes share memory"
],
answer:1,
explanation:"Multiprocessing avoids the Global Interpreter Lock and enables true parallel execution."
},

{
id:25,
difficulty:"hard",
category:"python",
question:"What is the primary benefit of using generators in large ETL pipelines?",
options:[
"Higher CPU speed",
"Lower memory consumption",
"Automatic indexing",
"Faster network transfer"
],
answer:1,
explanation:"Generators process one record at a time, making them memory-efficient for large datasets."
},

{
id:26,
difficulty:"easy",
category:"sql",
question:"Which JOIN returns only matching records from both tables?",
options:[
"LEFT JOIN",
"RIGHT JOIN",
"INNER JOIN",
"FULL OUTER JOIN"
],
answer:2,
explanation:"INNER JOIN returns only rows where matching values exist in both tables."
},

{
id:27,
difficulty:"medium",
category:"sql",
question:"Which SQL function assigns the same rank to equal values without gaps?",
options:[
"ROW_NUMBER()",
"RANK()",
"DENSE_RANK()",
"NTILE()"
],
answer:2,
explanation:"DENSE_RANK() assigns equal ranks without leaving gaps."
},

{
id:28,
difficulty:"hard",
category:"sql",
question:"Which execution plan operator usually indicates the need for an index?",
options:[
"Index Seek",
"Table Scan",
"Nested Loop",
"Hash Aggregate"
],
answer:1,
explanation:"Large table scans often indicate missing or ineffective indexes."
},

{
id:29,
difficulty:"medium",
category:"sql",
question:"Which normalization form removes transitive dependency?",
options:[
"1NF",
"2NF",
"3NF",
"BCNF"
],
answer:2,
explanation:"Third Normal Form removes transitive dependencies."
},

{
id:30,
difficulty:"hard",
category:"sql",
question:"Which optimization reduces network traffic between Spark and SQL databases?",
options:[
"SELECT *",
"Predicate Pushdown",
"CROSS JOIN",
"ORDER BY"
],
answer:1,
explanation:"Predicate pushdown filters data at the source, minimizing data transfer."
},

{
id:31,
difficulty:"easy",
category:"spark",
question:"Which language API is most commonly used with Apache Spark?",
options:[
"C#",
"JavaScript",
"PySpark",
"PHP"
],
answer:2,
explanation:"PySpark is the Python API for Apache Spark."
},

{
id:32,
difficulty:"easy",
category:"spark",
question:"Which Spark component stores data across multiple machines?",
options:[
"RDD",
"HTTP Server",
"Notebook",
"Scheduler UI"
],
answer:0,
explanation:"RDD (Resilient Distributed Dataset) is Spark's core distributed data abstraction."
},

{
id:33,
difficulty:"medium",
category:"spark",
question:"Which transformation causes a shuffle?",
options:[
"filter()",
"map()",
"groupByKey()",
"select()"
],
answer:2,
explanation:"groupByKey() redistributes data across partitions, causing a shuffle."
},

{
id:34,
difficulty:"medium",
category:"spark",
question:"What is the default execution model of Spark transformations?",
options:[
"Eager",
"Immediate",
"Lazy",
"Synchronous"
],
answer:2,
explanation:"Spark evaluates transformations lazily and executes only when an action is triggered."
},

{
id:35,
difficulty:"hard",
category:"spark",
question:"Which issue commonly causes Spark jobs to run slowly?",
options:[
"Broadcast Join",
"Partition Pruning",
"Data Skew",
"Column Pruning"
],
answer:2,
explanation:"Data skew causes uneven workload distribution among executors."
},

{
id:36,
difficulty:"hard",
category:"spark",
question:"For approximately 10GB of daily input data, what is the recommended initial partition strategy?",
options:[
"1 Partition",
"2 Partitions",
"Approximately 128MB–256MB per partition",
"One partition per executor"
],
answer:2,
explanation:"Spark performs best when partitions are around 128–256 MB."
},

{
id:37,
difficulty:"medium",
category:"spark",
question:"What is the benefit of Broadcast Join?",
options:[
"Increases shuffle",
"Copies small tables to executors",
"Deletes duplicate rows",
"Compresses data"
],
answer:1,
explanation:"Broadcast joins avoid expensive shuffles when one table is small."
},

{
id:38,
difficulty:"hard",
category:"spark",
question:"Which Spark UI tab is most useful for identifying stage bottlenecks?",
options:[
"Environment",
"Jobs",
"Storage",
"Executors"
],
answer:1,
explanation:"The Jobs and Stages pages help identify long-running stages and shuffle bottlenecks."
},

{
id:39,
difficulty:"medium",
category:"spark",
question:"Which storage level does cache() use by default?",
options:[
"MEMORY_ONLY",
"DISK_ONLY",
"MEMORY_AND_DISK",
"OFF_HEAP"
],
answer:0,
explanation:"cache() is equivalent to persist(MEMORY_ONLY)."
},

{
id:40,
difficulty:"hard",
category:"spark",
question:"When should persist(MEMORY_AND_DISK) be preferred over cache()?",
options:[
"When data fits comfortably in memory",
"When the dataset is reused and may exceed available memory",
"When writing CSV",
"When reading JSON"
],
answer:1,
explanation:"MEMORY_AND_DISK prevents recomputation if data cannot fit entirely in memory."
},

{
id:41,
difficulty:"easy",
category:"databricks",
question:"Which storage format is the default recommendation for Databricks?",
options:[
"CSV",
"Parquet",
"Delta Lake",
"JSON"
],
answer:2,
explanation:"Delta Lake provides ACID transactions, schema enforcement and time travel."
},

{
id:42,
difficulty:"medium",
category:"databricks",
question:"Which Databricks feature enables ACID transactions?",
options:[
"Hive",
"Delta Lake",
"Photon",
"MLflow"
],
answer:1,
explanation:"Delta Lake adds transactional guarantees to the data lake."
},

{
id:43,
difficulty:"medium",
category:"databricks",
question:"Which command compacts small Delta files?",
options:[
"MERGE",
"OPTIMIZE",
"DESCRIBE",
"VACUUM"
],
answer:1,
explanation:"OPTIMIZE reduces the number of small files to improve query performance."
},

{
id:44,
difficulty:"medium",
category:"databricks",
question:"What does ZORDER primarily improve?",
options:[
"Security",
"Storage Cost",
"Query Performance",
"Notebook Startup"
],
answer:2,
explanation:"ZORDER colocates related data to reduce file scanning."
},

{
id:45,
difficulty:"hard",
category:"databricks",
question:"Which Delta feature allows querying previous versions of data?",
options:[
"MERGE",
"VACUUM",
"Time Travel",
"Photon"
],
answer:2,
explanation:"Time Travel enables rollback and historical queries."
},

{
id:46,
difficulty:"hard",
category:"databricks",
question:"What is the primary purpose of Unity Catalog?",
options:[
"Notebook Scheduling",
"Cluster Autoscaling",
"Centralized Governance",
"Data Compression"
],
answer:2,
explanation:"Unity Catalog centralizes access control, lineage and governance."
},

{
id:47,
difficulty:"hard",
category:"databricks",
question:"A parent job fails because one child notebook throws an exception. Which practice improves traceability?",
options:[
"Disable retries",
"Use task values, job parameters and centralized logging",
"Run all notebooks manually",
"Increase cluster size"
],
answer:1,
explanation:"Passing parameters and centralized logging improve troubleshooting across workflows."
},

{
id:48,
difficulty:"hard",
category:"databricks",
question:"What is the main benefit of Job Clusters over All-Purpose Clusters?",
options:[
"Permanent caching",
"Lower cost for scheduled workloads",
"Unlimited storage",
"Faster SQL syntax"
],
answer:1,
explanation:"Job Clusters terminate automatically after execution, reducing compute costs."
},

{
id:49,
difficulty:"hard",
category:"databricks",
question:"Which command permanently removes obsolete Delta files after the retention period?",
options:[
"DELETE",
"MERGE",
"VACUUM",
"OPTIMIZE"
],
answer:2,
explanation:"VACUUM removes files no longer referenced by Delta Lake."
},

{
id:50,
difficulty:"hard",
category:"databricks",
question:"Which practice best reduces Databricks compute costs in production?",
options:[
"Use all-purpose clusters for everything",
"Keep clusters running 24x7",
"Use autoscaling job clusters with cluster policies",
"Disable auto-termination"
],
answer:2,
explanation:"Autoscaling job clusters with governance policies provide the best balance of performance and cost."
},

 {
id:51,
difficulty:"easy",
category:"azure",
question:"Which Azure service is primarily used for orchestrating ETL/ELT pipelines?",
options:[
"Azure Kubernetes Service",
"Azure Data Factory",
"Azure DevOps",
"Azure Monitor"
],
answer:1,
explanation:"Azure Data Factory (ADF) is Microsoft's managed data integration and orchestration service."
},

{
id:52,
difficulty:"medium",
category:"azure",
question:"Which Azure storage service is recommended for a Lakehouse architecture?",
options:[
"Azure SQL Database",
"Azure Data Lake Storage Gen2",
"Azure Cosmos DB",
"Azure Cache for Redis"
],
answer:1,
explanation:"ADLS Gen2 provides scalable hierarchical storage optimized for analytics."
},

{
id:53,
difficulty:"medium",
category:"azure",
question:"Which Azure service combines big data analytics and enterprise data warehousing?",
options:[
"Azure Synapse Analytics",
"Azure Functions",
"Azure Logic Apps",
"Azure Monitor"
],
answer:0,
explanation:"Azure Synapse integrates SQL, Spark, pipelines and analytics into a unified platform."
},

{
id:54,
difficulty:"hard",
category:"azure",
question:"Which Azure security feature should be used to store Databricks secrets securely?",
options:[
"Azure Blob Storage",
"Azure Key Vault",
"Azure Files",
"Azure Backup"
],
answer:1,
explanation:"Azure Key Vault securely stores secrets, certificates and encryption keys."
},

{
id:55,
difficulty:"hard",
category:"azure",
question:"How should Azure Databricks securely access ADLS Gen2?",
options:[
"Storage Account Key",
"Managed Identity or Service Principal",
"Shared Password",
"Anonymous Access"
],
answer:1,
explanation:"Managed Identity or Service Principal with RBAC provides secure access."
},

{
id:56,
difficulty:"easy",
category:"aws",
question:"Which AWS service provides highly durable object storage?",
options:[
"EBS",
"S3",
"RDS",
"DynamoDB"
],
answer:1,
explanation:"Amazon S3 is the foundation for most AWS data lakes."
},

{
id:57,
difficulty:"medium",
category:"aws",
question:"Which AWS service is primarily used for serverless ETL jobs?",
options:[
"Glue",
"CloudFormation",
"Route53",
"CloudTrail"
],
answer:0,
explanation:"AWS Glue is a managed ETL and data integration service."
},

{
id:58,
difficulty:"medium",
category:"aws",
question:"Which AWS analytics service is designed for petabyte-scale data warehousing?",
options:[
"Lambda",
"Redshift",
"CloudFront",
"SNS"
],
answer:1,
explanation:"Amazon Redshift is AWS's cloud-native analytical data warehouse."
},

{
id:59,
difficulty:"hard",
category:"aws",
question:"Which AWS service provides managed Apache Kafka?",
options:[
"SQS",
"MSK",
"Kinesis",
"EventBridge"
],
answer:1,
explanation:"Amazon MSK (Managed Streaming for Apache Kafka) manages Kafka clusters."
},

{
id:60,
difficulty:"hard",
category:"aws",
question:"When migrating from a local Kafka cluster to AWS, what is the preferred managed target?",
options:[
"Amazon RDS",
"Amazon MSK",
"Amazon EC2 only",
"Amazon CloudFront"
],
answer:1,
explanation:"Amazon MSK minimizes operational overhead while remaining Kafka-compatible."
},

{
id:61,
difficulty:"medium",
category:"aws",
question:"Which AWS AI service enables access to foundation models like Claude and Llama?",
options:[
"Textract",
"Comprehend",
"Bedrock",
"Polly"
],
answer:2,
explanation:"Amazon Bedrock provides managed access to multiple foundation models."
},

{
id:62,
difficulty:"hard",
category:"aws",
question:"What is the biggest architectural benefit of migrating from a local LLM to Amazon Bedrock?",
options:[
"Unlimited GPU",
"No prompt engineering required",
"Managed scaling, security and model hosting",
"Automatic SQL optimization"
],
answer:2,
explanation:"Bedrock eliminates infrastructure management while providing secure managed AI services."
},

{
id:63,
difficulty:"easy",
category:"snowflake",
question:"What is Snowflake's primary architectural advantage?",
options:[
"Embedded Java",
"Separated compute and storage",
"Runs only on-premises",
"Requires Hadoop"
],
answer:1,
explanation:"Snowflake independently scales compute and storage."
},

{
id:64,
difficulty:"medium",
category:"fabric",
question:"Microsoft Fabric is best described as:",
options:[
"Only a BI tool",
"An end-to-end analytics SaaS platform",
"A Kubernetes platform",
"A programming language"
],
answer:1,
explanation:"Fabric unifies data engineering, warehousing, BI and AI."
},

{
id:65,
difficulty:"easy",
category:"ai",
question:"What does LLM stand for?",
options:[
"Logical Language Model",
"Large Language Model",
"Linear Learning Method",
"Long Lifecycle Module"
],
answer:1,
explanation:"LLM stands for Large Language Model."
},

{
id:66,
difficulty:"medium",
category:"ai",
question:"Which technique reduces hallucination without retraining an LLM?",
options:[
"Fine-tuning",
"RAG",
"Normalization",
"Tokenization"
],
answer:1,
explanation:"Retrieval-Augmented Generation provides relevant external knowledge."
},

{
id:67,
difficulty:"medium",
category:"ai",
question:"What is the purpose of embeddings?",
options:[
"Compress images",
"Convert text into numerical vectors",
"Encrypt data",
"Improve SQL performance"
],
answer:1,
explanation:"Embeddings capture semantic meaning as vectors."
},

{
id:68,
difficulty:"medium",
category:"ai",
question:"Which database is optimized for similarity search?",
options:[
"MySQL",
"SQL Server",
"Vector Database",
"SQLite"
],
answer:2,
explanation:"Vector databases efficiently search embeddings using nearest-neighbor algorithms."
},

{
id:69,
difficulty:"hard",
category:"rag",
question:"Which component retrieves relevant documents before sending context to an LLM?",
options:[
"Tokenizer",
"Retriever",
"Optimizer",
"Scheduler"
],
answer:1,
explanation:"The retriever finds relevant chunks from the vector database."
},

{
id:70,
difficulty:"hard",
category:"rag",
question:"Which issue most commonly reduces RAG answer quality?",
options:[
"Large monitor",
"Poor document chunking",
"High network speed",
"SSD storage"
],
answer:1,
explanation:"Improper chunking often leads to poor retrieval accuracy."
},

{
id:71,
difficulty:"hard",
category:"vector-db",
question:"What happens if embeddings are generated using different models for indexing and querying?",
options:[
"Better recall",
"No impact",
"Poor similarity matching",
"Lower storage cost"
],
answer:2,
explanation:"Embedding mismatch significantly degrades semantic search quality."
},

{
id:72,
difficulty:"hard",
category:"vector-db",
question:"Which metric is commonly used for vector similarity search?",
options:[
"CRC",
"Cosine Similarity",
"B-Tree",
"Hash Join"
],
answer:1,
explanation:"Cosine similarity is one of the most widely used vector similarity metrics."
},

{
id:73,
difficulty:"hard",
category:"ai",
question:"Which practice is part of Responsible AI?",
options:[
"Ignoring bias",
"Model explainability",
"Removing logging",
"Disabling encryption"
],
answer:1,
explanation:"Responsible AI includes fairness, explainability, transparency and governance."
},

{
id:74,
difficulty:"hard",
category:"ai",
question:"Which tool is widely used for ML experiment tracking?",
options:[
"Terraform",
"MLflow",
"Jenkins",
"Redis"
],
answer:1,
explanation:"MLflow tracks experiments, parameters, metrics and model versions."
},

{
id:75,
difficulty:"hard",
category:"architecture",
question:"A business wants near real-time dashboards with AI predictions. Which architecture is most appropriate?",
options:[
"Nightly batch ETL only",
"Streaming ingestion → Lakehouse → Feature Store → ML Model → BI Dashboard",
"CSV uploads every week",
"Desktop database"
],
answer:1,
explanation:"Streaming pipelines feeding a Lakehouse with ML inference provide low-latency analytics and AI predictions."
},

{
id:76,
difficulty:"medium",
category:"monitoring",
question:"Which observability framework is commonly used to collect traces, metrics and logs across distributed systems?",
options:[
"JUnit",
"OpenTelemetry",
"Mockito",
"Liquibase"
],
answer:1,
explanation:"OpenTelemetry is the industry standard for collecting telemetry data including metrics, traces and logs."
},

{
id:77,
difficulty:"medium",
category:"monitoring",
question:"Which Datadog feature helps trace a request across multiple microservices?",
options:[
"Log Explorer",
"APM Distributed Tracing",
"Dashboard Lists",
"Synthetics Only"
],
answer:1,
explanation:"Datadog APM correlates requests across services using distributed tracing."
},

{
id:78,
difficulty:"medium",
category:"monitoring",
question:"Azure Application Insights is primarily used for:",
options:[
"Building Docker images",
"Application monitoring and telemetry",
"Managing Azure subscriptions",
"Provisioning VMs"
],
answer:1,
explanation:"Application Insights collects request telemetry, dependencies, exceptions and performance metrics."
},

{
id:79,
difficulty:"hard",
category:"monitoring",
question:"A production API suddenly becomes slow although CPU utilization is low. What should be investigated first?",
options:[
"Delete indexes",
"Distributed traces and dependency latency",
"Increase VM size immediately",
"Restart the database"
],
answer:1,
explanation:"Distributed tracing often reveals downstream dependency bottlenecks that are not visible from CPU metrics alone."
},

{
id:80,
difficulty:"hard",
category:"aws",
question:"Users in Asia report slow website access while US users do not. Which AWS service is designed to reduce global latency?",
options:[
"SNS",
"CloudFront",
"SQS",
"CloudTrail"
],
answer:1,
explanation:"CloudFront caches content at edge locations around the world, reducing latency."
},

{
id:81,
difficulty:"hard",
category:"databricks",
question:"Which Databricks feature enforces standardized compute configuration and security settings?",
options:[
"Notebook Widgets",
"Cluster Policies",
"Delta Sharing",
"Repos"
],
answer:1,
explanation:"Cluster Policies enforce VM types, auto-termination, libraries and governance rules."
},

{
id:82,
difficulty:"hard",
category:"databricks",
question:"Which Delta Lake command shows historical operations performed on a table?",
options:[
"DESCRIBE HISTORY",
"SHOW USERS",
"LIST FILES",
"DESCRIBE DATABASE"
],
answer:0,
explanation:"DESCRIBE HISTORY provides an audit trail of operations performed on a Delta table."
},

{
id:83,
difficulty:"hard",
category:"databricks",
question:"What is the safest method to recover accidentally deleted Delta data?",
options:[
"Restart the cluster",
"Delta Time Travel or RESTORE",
"Delete transaction logs",
"Run VACUUM immediately"
],
answer:1,
explanation:"Time Travel and RESTORE allow recovery before obsolete files are vacuumed."
},

{
id:84,
difficulty:"hard",
category:"spark",
question:"A Spark executor repeatedly runs OutOfMemory errors. Which action should be investigated first?",
options:[
"Increase retries",
"Review partition sizes and shuffle operations",
"Delete Delta logs",
"Disable caching"
],
answer:1,
explanation:"Oversized partitions and expensive shuffles are common causes of executor memory failures."
},

{
id:85,
difficulty:"hard",
category:"spark",
question:"Which Spark optimization automatically adjusts shuffle partitions during execution?",
options:[
"Photon",
"Adaptive Query Execution (AQE)",
"Checkpointing",
"Broadcast Variables"
],
answer:1,
explanation:"AQE dynamically optimizes joins, partition sizes and shuffle behavior."
},

{
id:86,
difficulty:"hard",
category:"security",
question:"Which encryption practice aligns with PCI DSS recommendations?",
options:[
"Plain-text storage",
"Encryption at rest and in transit",
"Base64 encoding",
"ZIP compression"
],
answer:1,
explanation:"PCI DSS requires strong encryption for sensitive data both at rest and during transmission."
},

{
id:87,
difficulty:"hard",
category:"security",
question:"Which access control principle should architects always follow?",
options:[
"Shared administrator account",
"Least Privilege",
"Anonymous access",
"Hardcoded credentials"
],
answer:1,
explanation:"Least Privilege minimizes security risks by granting only the permissions required."
},

{
id:88,
difficulty:"hard",
category:"security",
question:"Where should cloud application secrets be stored?",
options:[
"Git repository",
"Configuration file",
"Secret Manager or Key Vault",
"Application source code"
],
answer:2,
explanation:"Secrets should always be managed using dedicated secret management services."
},

{
id:89,
difficulty:"hard",
category:"governance",
question:"Which capability provides end-to-end data lineage across enterprise data assets?",
options:[
"Data Catalog",
"Unity Catalog or Microsoft Purview",
"GitHub Wiki",
"Azure Portal"
],
answer:1,
explanation:"Unity Catalog and Microsoft Purview provide governance, lineage and metadata management."
},

{
id:90,
difficulty:"hard",
category:"rag",
question:"Users report inconsistent answers despite identical prompts. What should be investigated first?",
options:[
"Keyboard layout",
"Retriever quality, chunking strategy and embedding consistency",
"Monitor brightness",
"Database password length"
],
answer:1,
explanation:"Poor retrieval quality is a common cause of inconsistent RAG responses."
},

{
id:91,
difficulty:"hard",
category:"cost-optimization",
question:"Which Databricks deployment generally minimizes operational cost for scheduled ETL jobs?",
options:[
"Always-on all-purpose clusters",
"Autoscaling job clusters with auto-termination",
"Largest VM available",
"Separate cluster per notebook permanently"
],
answer:1,
explanation:"Ephemeral autoscaling job clusters reduce idle compute costs."
},

{
id:92,
difficulty:"hard",
category:"architecture",
question:"Which design pattern improves resiliency between producer and consumer services?",
options:[
"Direct database updates",
"Message Queue or Event Streaming",
"Shared memory",
"SFTP polling only"
],
answer:1,
explanation:"Asynchronous messaging decouples systems and improves fault tolerance."
},

{
id:93,
difficulty:"hard",
category:"architecture",
question:"Which migration approach minimizes production risk when moving from an on-premises AI platform to AWS Bedrock?",
options:[
"Big Bang migration",
"Phased migration with parallel validation",
"Delete the old platform first",
"Move all production users immediately"
],
answer:1,
explanation:"A phased migration allows functional validation and rollback if issues occur."
},

{
id:94,
difficulty:"hard",
category:"operations",
question:"A production Databricks workflow intermittently fails. Which investigation should occur first?",
options:[
"Increase cluster size",
"Review Job Run history, driver logs and cluster event logs",
"Delete Delta tables",
"Disable retries"
],
answer:1,
explanation:"Job history and cluster logs usually identify infrastructure or application failures."
},

{
id:95,
difficulty:"hard",
category:"operations",
question:"Which KPI best indicates data pipeline reliability?",
options:[
"Notebook font size",
"Pipeline Success Rate / SLA Compliance",
"Developer count",
"Repository size"
],
answer:1,
explanation:"Successful execution within SLA is the key operational reliability metric."
},

{
id:96,
difficulty:"hard",
category:"troubleshooting",
question:"A Delta table has thousands of very small files causing poor performance. Which action should be taken?",
options:[
"DELETE all files",
"Run OPTIMIZE followed by appropriate maintenance",
"Restart Databricks",
"Disable Delta Lake"
],
answer:1,
explanation:"OPTIMIZE compacts small files and significantly improves query performance."
},

{
id:97,
difficulty:"hard",
category:"troubleshooting",
question:"Which metric is most useful for identifying Spark data skew?",
options:[
"Average notebook size",
"Executor task duration variance",
"CPU model",
"Workspace name"
],
answer:1,
explanation:"Large differences in executor task durations usually indicate skewed partitions."
},

{
id:98,
difficulty:"hard",
category:"leadership",
question:"When business stakeholders request a technically risky shortcut, what should a Solution Architect do?",
options:[
"Approve immediately",
"Document trade-offs, risks and recommended alternatives",
"Ignore the request",
"Let developers decide"
],
answer:1,
explanation:"Architects should communicate risks, evaluate alternatives and support informed decision-making."
},

{
id:99,
difficulty:"hard",
category:"architecture",
question:"Which factor is typically the highest priority when designing AI solutions for government or regulated industries?",
options:[
"Animated dashboards",
"Security, compliance and governance",
"Notebook themes",
"Programming language preference"
],
answer:1,
explanation:"Regulated environments require security, auditability, compliance and governance as primary design considerations."
},

{
id:100,
difficulty:"hard",
category:"architecture",
question:"What distinguishes an excellent Solution Architect from a senior developer?",
options:[
"Writes more code",
"Focuses only on cloud infrastructure",
"Balances business goals, technology, security, scalability, cost and operational excellence",
"Only manages project schedules"
],
answer:2,
explanation:"A Solution Architect makes strategic technology decisions that align with business objectives while considering scalability, security, governance, operational support and long-term cost."
},
{
id:101,
difficulty:"hard",
category:"databricks",
question:"A Delta table is queried thousands of times daily but query performance has degraded significantly over six months. What should be investigated first?",
options:[
"Increase cluster size",
"Review small-file fragmentation, ZORDER strategy, partitioning and OPTIMIZE schedule",
"Restart the workspace",
"Increase notebook timeout"
],
answer:1,
explanation:"Over time many incremental writes create small files. Regular OPTIMIZE, proper partitioning and ZORDER maintain query performance."
},

{
id:102,
difficulty:"hard",
category:"databricks",
question:"Which Delta Lake feature provides full auditability of every table modification?",
options:[
"VACUUM",
"DESCRIBE HISTORY",
"OPTIMIZE",
"CHECKPOINT"
],
answer:1,
explanation:"DESCRIBE HISTORY records all operations including UPDATE, DELETE, MERGE, OPTIMIZE and RESTORE."
},

{
id:103,
difficulty:"hard",
category:"databricks",
question:"A developer accidentally executed DELETE FROM Customer without a WHERE clause. What is the fastest recovery approach?",
options:[
"Restore database backup",
"Delta RESTORE or Time Travel",
"Rebuild entire table",
"Restart cluster"
],
answer:1,
explanation:"Delta Time Travel and RESTORE recover previous table versions within the retention period."
},

{
id:104,
difficulty:"hard",
category:"spark",
question:"A Spark job processes 10 GB daily. Which partition size generally provides optimal performance?",
options:[
"5 MB",
"25 MB",
"128-256 MB",
"2 GB"
],
answer:2,
explanation:"Spark generally performs best when partitions are around 128-256 MB, balancing parallelism and scheduling overhead."
},

{
id:105,
difficulty:"hard",
category:"spark",
question:"Which Spark join should be selected when joining a 50 GB fact table with a 20 MB lookup table?",
options:[
"Sort Merge Join",
"Broadcast Join",
"Shuffle Hash Join",
"Cartesian Join"
],
answer:1,
explanation:"Broadcast Join avoids shuffling the large table by distributing the small lookup table to executors."
},

{
id:106,
difficulty:"hard",
category:"spark",
question:"Which Spark metric is the strongest indicator of data skew?",
options:[
"Driver CPU",
"Executor memory",
"Large variance in task duration",
"Notebook execution time"
],
answer:2,
explanation:"Highly uneven task durations usually indicate skewed partitions."
},

{
id:107,
difficulty:"hard",
category:"spark",
question:"Which Adaptive Query Execution capability dynamically converts Sort Merge Join into Broadcast Join?",
options:[
"Dynamic Allocation",
"AQE Join Optimization",
"Checkpointing",
"Stage Retry"
],
answer:1,
explanation:"AQE automatically changes join strategies based on runtime statistics."
},

{
id:108,
difficulty:"hard",
category:"databricks",
question:"Which Databricks cluster type should be used for nightly ETL workloads?",
options:[
"All Purpose Cluster",
"Job Cluster",
"SQL Warehouse",
"Personal Compute"
],
answer:1,
explanation:"Job Clusters automatically terminate after completion, reducing operational cost."
},

{
id:109,
difficulty:"hard",
category:"databricks",
question:"Which feature prevents developers from selecting oversized VM types?",
options:[
"Notebook ACL",
"Cluster Policy",
"Workspace Folder",
"Secret Scope"
],
answer:1,
explanation:"Cluster Policies enforce approved VM sizes, runtime versions and security settings."
},

{
id:110,
difficulty:"hard",
category:"databricks",
question:"Parent Job A launches ten child jobs. Three complete successfully while one fails. Which mechanism enables automatic recovery?",
options:[
"Notebook Widgets",
"Task Retry Policy",
"Driver Restart",
"Cluster Restart"
],
answer:1,
explanation:"Databricks Jobs support configurable retry policies for failed tasks."
},

{
id:111,
difficulty:"hard",
category:"databricks",
question:"Which practice provides complete traceability across parent and child jobs?",
options:[
"Separate notebooks",
"Correlation IDs and Job Parameters",
"Different workspaces",
"Manual logging"
],
answer:1,
explanation:"Correlation IDs enable end-to-end tracing across distributed workflows."
},

{
id:112,
difficulty:"hard",
category:"aws",
question:"Which AWS monitoring service collects infrastructure metrics and alarms?",
options:[
"CloudFront",
"CloudWatch",
"GuardDuty",
"Inspector"
],
answer:1,
explanation:"CloudWatch provides metrics, logs, dashboards and alarms."
},

{
id:113,
difficulty:"hard",
category:"aws",
question:"CloudFront users receive HTTP 403 errors. Which configuration should be checked first?",
options:[
"S3 bucket permissions or Origin Access Control",
"Lambda timeout",
"Redshift cluster",
"VPC Peering"
],
answer:0,
explanation:"403 errors commonly result from incorrect origin permissions."
},

{
id:114,
difficulty:"hard",
category:"monitoring",
question:"Which OpenTelemetry component exports traces to Datadog or Application Insights?",
options:[
"Collector",
"Driver",
"Executor",
"Workspace"
],
answer:0,
explanation:"The OpenTelemetry Collector gathers and exports telemetry to monitoring backends."
},

{
id:115,
difficulty:"hard",
category:"monitoring",
question:"Which telemetry type best identifies why one API call is slower than another?",
options:[
"Metrics only",
"Distributed Trace",
"Audit Log",
"Dashboard"
],
answer:1,
explanation:"Distributed tracing visualizes latency across every downstream dependency."
},

{
id:116,
difficulty:"hard",
category:"security",
question:"Which PCI DSS principle is violated by storing database passwords inside application source code?",
options:[
"Encryption",
"Least Privilege",
"Secure Credential Management",
"Audit Logging"
],
answer:2,
explanation:"Credentials should be stored in secure secret management solutions such as Key Vault or AWS Secrets Manager."
},

{
id:117,
difficulty:"hard",
category:"security",
question:"Which encryption algorithm is commonly recommended for encrypting stored enterprise data?",
options:[
"DES",
"AES-256",
"MD5",
"SHA-1"
],
answer:1,
explanation:"AES-256 is the industry standard for data-at-rest encryption."
},

{
id:118,
difficulty:"hard",
category:"rag",
question:"A RAG chatbot returns technically correct but outdated answers. What is the most likely cause?",
options:[
"GPU failure",
"Knowledge base not refreshed",
"Notebook timeout",
"Vector database too small"
],
answer:1,
explanation:"Outdated indexed documents produce outdated retrieval results."
},

{
id:119,
difficulty:"hard",
category:"rag",
question:"What is the primary purpose of reranking retrieved documents before passing them to the LLM?",
options:[
"Reduce storage",
"Improve relevance",
"Reduce embeddings",
"Increase GPU utilization"
],
answer:1,
explanation:"Reranking improves retrieval precision by ordering the most relevant documents first."
},

{
id:120,
difficulty:"hard",
category:"architecture",
question:"Which KPI best measures the success of an enterprise AI platform?",
options:[
"Lines of Python code",
"Business value delivered through reliable AI services",
"Number of notebooks",
"Developer count"
],
answer:1,
explanation:"Architects measure success through business outcomes, reliability, governance and operational excellence."
},
{
id:121,
difficulty:"hard",
category:"spark",
question:"A Spark job that normally completes in 20 minutes suddenly takes 2 hours. Executor CPU utilization is low but shuffle read has increased dramatically. What is the most likely root cause?",
options:[
"Driver memory too large",
"Data skew after a new partition key",
"Notebook timeout",
"Broadcast variable corruption"
],
answer:1,
explanation:"A poor partition key can create data skew, causing excessive shuffle and long-running tasks."
},

{
id:122,
difficulty:"hard",
category:"spark",
question:"Which Spark configuration controls the default number of shuffle partitions?",
options:[
"spark.executor.instances",
"spark.sql.shuffle.partitions",
"spark.driver.memory",
"spark.storage.level"
],
answer:1,
explanation:"spark.sql.shuffle.partitions controls the default number of partitions generated during shuffle operations."
},

{
id:123,
difficulty:"hard",
category:"spark",
question:"Which Spark UI page should be examined first when investigating executor OutOfMemory errors?",
options:[
"SQL",
"Executors",
"Storage",
"Environment"
],
answer:1,
explanation:"The Executors page shows memory usage, failed executors and GC activity."
},

{
id:124,
difficulty:"hard",
category:"spark",
question:"When should checkpointing be preferred over caching?",
options:[
"When data is reused frequently",
"When lineage becomes extremely long or iterative algorithms are used",
"When reading CSV",
"When using Delta Lake"
],
answer:1,
explanation:"Checkpointing truncates lineage, improving reliability for long-running iterative jobs."
},

{
id:125,
difficulty:"hard",
category:"databricks",
question:"A Delta MERGE job is becoming progressively slower each month. Which maintenance task is most likely missing?",
options:[
"OPTIMIZE and ZORDER",
"Restarting the cluster daily",
"Increasing notebook timeout",
"Deleting transaction logs"
],
answer:0,
explanation:"Regular OPTIMIZE reduces file fragmentation while ZORDER improves pruning efficiency."
},

{
id:126,
difficulty:"hard",
category:"databricks",
question:"Which Delta feature guarantees concurrent write consistency?",
options:[
"Auto Loader",
"ACID Transactions",
"Photon",
"MLflow"
],
answer:1,
explanation:"Delta Lake implements ACID transactions to prevent data corruption during concurrent operations."
},

{
id:127,
difficulty:"hard",
category:"databricks",
question:"Which Databricks runtime engine significantly accelerates SQL and DataFrame execution?",
options:[
"Photon",
"Unity Catalog",
"Delta Sharing",
"Workspace Files"
],
answer:0,
explanation:"Photon is a vectorized execution engine optimized for modern CPUs."
},

{
id:128,
difficulty:"hard",
category:"databricks",
question:"What is the primary benefit of Auto Loader over traditional file ingestion?",
options:[
"Runs only on CSV",
"Automatically detects and incrementally processes new files",
"Requires Hadoop",
"Deletes source files"
],
answer:1,
explanation:"Auto Loader efficiently processes newly arriving files with scalable file discovery."
},

{
id:129,
difficulty:"hard",
category:"databricks",
question:"Which Unity Catalog feature provides complete column-level lineage?",
options:[
"Workspace Browser",
"Lineage Explorer",
"Notebook Revision History",
"Cluster Events"
],
answer:1,
explanation:"Unity Catalog tracks lineage across tables, notebooks and columns."
},

{
id:130,
difficulty:"hard",
category:"architecture",
question:"An executive requests a 99.99% available analytics platform. Which architectural principle is most important?",
options:[
"Single VM",
"High Availability with redundancy across failure domains",
"Manual backups only",
"Large CPU instances"
],
answer:1,
explanation:"High availability requires redundant infrastructure, failover and resilient services."
},

{
id:131,
difficulty:"hard",
category:"aws",
question:"Which AWS service should store secrets for applications running on ECS or EKS?",
options:[
"S3",
"AWS Secrets Manager",
"CloudWatch",
"Route53"
],
answer:1,
explanation:"Secrets Manager securely stores and rotates application credentials."
},

{
id:132,
difficulty:"hard",
category:"aws",
question:"An S3 bucket suddenly becomes publicly accessible. Which AWS service can detect this security risk automatically?",
options:[
"CloudTrail",
"GuardDuty",
"Macie",
"SNS"
],
answer:2,
explanation:"Amazon Macie identifies sensitive data exposure and public bucket risks."
},

{
id:133,
difficulty:"hard",
category:"azure",
question:"Which Azure service provides centralized governance, cataloging and lineage?",
options:[
"Azure Monitor",
"Microsoft Purview",
"Azure Firewall",
"Azure Bastion"
],
answer:1,
explanation:"Microsoft Purview provides enterprise data governance and metadata management."
},

{
id:134,
difficulty:"hard",
category:"azure",
question:"Which Azure networking feature allows Databricks to access storage without traversing the public internet?",
options:[
"VPN Gateway",
"Private Endpoint",
"ExpressRoute only",
"Azure DNS"
],
answer:1,
explanation:"Private Endpoints securely connect PaaS services over Microsoft's backbone."
},

{
id:135,
difficulty:"hard",
category:"python",
question:"A Python ETL process consumes excessive memory while reading a 40GB CSV. What is the preferred approach?",
options:[
"Read entire file into memory",
"Use generators or chunked processing",
"Increase swap space",
"Convert to JSON first"
],
answer:1,
explanation:"Chunked processing and generators significantly reduce memory usage."
},

{
id:136,
difficulty:"hard",
category:"python",
question:"Which Python library is most commonly used for interacting with Apache Spark?",
options:[
"NumPy",
"PySpark",
"TensorFlow",
"Scikit-learn"
],
answer:1,
explanation:"PySpark is the official Python API for Apache Spark."
},

{
id:137,
difficulty:"hard",
category:"monitoring",
question:"Which metric is most useful for identifying memory leaks in a Java or Spark application?",
options:[
"CPU utilization",
"Heap usage trend",
"Disk capacity",
"Network bandwidth"
],
answer:1,
explanation:"A steadily increasing heap without release often indicates a memory leak."
},

{
id:138,
difficulty:"hard",
category:"monitoring",
question:"Which dashboard should an architect review first during a Sev-1 production incident?",
options:[
"Business KPI Dashboard",
"Application health, dependencies and error rate",
"Developer productivity",
"Repository statistics"
],
answer:1,
explanation:"Health dashboards quickly identify failing services and dependencies."
},

{
id:139,
difficulty:"hard",
category:"security",
question:"Which authentication mechanism is recommended for enterprise REST APIs?",
options:[
"Basic Authentication",
"JWT/OAuth2 with OpenID Connect",
"Anonymous Access",
"API Key in Source Code"
],
answer:1,
explanation:"OAuth2 and OpenID Connect provide secure authentication and authorization."
},

{
id:140,
difficulty:"hard",
category:"architecture",
question:"Which quality attribute is improved by introducing asynchronous messaging with Kafka or Amazon MSK?",
options:[
"Tight coupling",
"Scalability and resiliency",
"Compile time",
"Notebook startup"
],
answer:1,
explanation:"Asynchronous messaging decouples services, improving scalability, resilience and fault tolerance."
},  
  
];


