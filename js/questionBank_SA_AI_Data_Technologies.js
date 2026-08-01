/* ======================================================
SOLUTION ARCHITECT - DATA AND AI TECHNOLOGIES
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
 {
id:141,
difficulty:"hard",
category:"databricks",
question:"A Databricks cluster spends nearly 8 minutes starting before every scheduled ETL job. Which approach best reduces overall execution time while keeping costs low?",
options:[
"Use an always-on all-purpose cluster",
"Enable cluster pools with job clusters",
"Disable auto termination",
"Increase driver memory"
],
answer:1,
explanation:"Cluster Pools keep pre-warmed VM instances available, significantly reducing cluster startup time while retaining the cost benefits of ephemeral job clusters."
},

{
id:142,
difficulty:"hard",
category:"databricks",
question:"Your Delta table has over 25 million small files. Besides OPTIMIZE, what architectural change should be considered?",
options:[
"Increase notebook timeout",
"Review ingestion frequency and file sizing strategy",
"Use larger driver node",
"Disable Delta transaction logs"
],
answer:1,
explanation:"Generating appropriately sized files during ingestion prevents excessive file fragmentation."
},

{
id:143,
difficulty:"hard",
category:"spark",
question:"Which Spark optimization reduces unnecessary data movement before joins?",
options:[
"Predicate Pushdown",
"Broadcast Join",
"Column Pruning",
"Partition Pruning"
],
answer:3,
explanation:"Partition pruning minimizes data scanned by reading only relevant partitions."
},

{
id:144,
difficulty:"hard",
category:"spark",
question:"A Spark Structured Streaming job begins falling behind incoming Kafka messages. What should be checked first?",
options:[
"Dashboard color",
"Processing latency and batch duration",
"Notebook revision history",
"Workspace permissions"
],
answer:1,
explanation:"If processing time exceeds ingestion time, backlog accumulates."
},

{
id:145,
difficulty:"hard",
category:"architecture",
question:"What is the primary purpose of a Medallion Architecture?",
options:[
"Improve UI performance",
"Organize data quality into Bronze, Silver and Gold layers",
"Increase VM memory",
"Reduce notebook count"
],
answer:1,
explanation:"The Medallion Architecture progressively improves data quality and usability across layers."
},

{
id:146,
difficulty:"hard",
category:"architecture",
question:"Which data quality dimension verifies that all required records are present?",
options:[
"Accuracy",
"Completeness",
"Consistency",
"Validity"
],
answer:1,
explanation:"Completeness measures whether expected records and attributes are available."
},

{
id:147,
difficulty:"hard",
category:"aws",
question:"A CloudFront distribution serves stale content after deployment. What should be performed?",
options:[
"Increase EC2 size",
"Invalidate the CloudFront cache",
"Restart Route53",
"Delete the S3 bucket"
],
answer:1,
explanation:"Invalidation removes cached objects so users receive updated content."
},

{
id:148,
difficulty:"hard",
category:"aws",
question:"Which AWS service continuously records API activity for auditing?",
options:[
"CloudTrail",
"CloudWatch",
"SNS",
"Inspector"
],
answer:0,
explanation:"CloudTrail records API activity across AWS services for governance and auditing."
},

{
id:149,
difficulty:"hard",
category:"azure",
question:"Which Azure service should monitor distributed application dependencies?",
options:[
"Application Insights",
"Blob Storage",
"Azure DNS",
"Azure Backup"
],
answer:0,
explanation:"Application Insights provides request, dependency and exception telemetry."
},

{
id:150,
difficulty:"hard",
category:"security",
question:"Which authentication method eliminates long-lived access keys for Azure resources?",
options:[
"Managed Identity",
"Shared Access Signature only",
"Storage Account Keys",
"Anonymous Access"
],
answer:0,
explanation:"Managed Identity removes the need to store credentials in applications."
},

{
id:151,
difficulty:"hard",
category:"security",
question:"Which PCI DSS requirement is satisfied by maintaining centralized audit logs?",
options:[
"Requirement 10",
"Requirement 1",
"Requirement 3",
"Requirement 7"
],
answer:0,
explanation:"PCI DSS Requirement 10 focuses on tracking and monitoring access to network resources and cardholder data."
},

{
id:152,
difficulty:"hard",
category:"rag",
question:"Users complain that the chatbot frequently answers from irrelevant documents. Which component should be tuned first?",
options:[
"LLM temperature",
"Retriever and chunking strategy",
"Notebook timeout",
"GPU memory"
],
answer:1,
explanation:"Poor retrieval quality is often caused by suboptimal chunking or retriever configuration."
},

{
id:153,
difficulty:"hard",
category:"vector-db",
question:"Which indexing algorithm is commonly used for approximate nearest-neighbor search?",
options:[
"B-Tree",
"HNSW",
"Bitmap",
"Hash Index"
],
answer:1,
explanation:"Hierarchical Navigable Small World (HNSW) is widely used for efficient vector similarity search."
},

{
id:154,
difficulty:"hard",
category:"ai",
question:"Which metric is most suitable for evaluating document retrieval quality in a RAG system?",
options:[
"CPU Utilization",
"Recall@K",
"Heap Size",
"Notebook Duration"
],
answer:1,
explanation:"Recall@K measures whether relevant documents are retrieved within the top K results."
},

{
id:155,
difficulty:"hard",
category:"mlops",
question:"Why is model versioning important in MLflow?",
options:[
"Improves SQL performance",
"Supports reproducibility, rollback and governance",
"Reduces storage",
"Speeds up training"
],
answer:1,
explanation:"Model versioning enables traceability, controlled promotion and rollback."
},

{
id:156,
difficulty:"hard",
category:"devops",
question:"What is the main benefit of Infrastructure as Code using Terraform?",
options:[
"Faster SQL queries",
"Repeatable and auditable infrastructure provisioning",
"Lower JVM memory",
"Improved notebook performance"
],
answer:1,
explanation:"Terraform enables consistent, version-controlled infrastructure deployments."
},

{
id:157,
difficulty:"hard",
category:"monitoring",
question:"A dashboard shows increased API latency but stable infrastructure metrics. What is the likely next troubleshooting step?",
options:[
"Increase VM size immediately",
"Review distributed traces for downstream service latency",
"Restart Kubernetes cluster",
"Delete logs"
],
answer:1,
explanation:"Latency often originates from downstream dependencies rather than infrastructure saturation."
},

{
id:158,
difficulty:"hard",
category:"operations",
question:"Which operational metric best measures pipeline reliability?",
options:[
"Developer Count",
"Pipeline Success Rate",
"Repository Size",
"Notebook Count"
],
answer:1,
explanation:"Pipeline success rate directly reflects operational reliability."
},

{
id:159,
difficulty:"hard",
category:"cost-optimization",
question:"Which cloud architecture generally minimizes analytics costs?",
options:[
"Always-on clusters",
"Autoscaling compute with object storage",
"Dedicated VMs for every workload",
"Largest instance types"
],
answer:1,
explanation:"Separating scalable object storage from elastic compute minimizes idle costs."
},

{
id:160,
difficulty:"hard",
category:"leadership",
question:"A business stakeholder requests an unrealistic delivery date. What should a Solution Architect do?",
options:[
"Agree immediately",
"Present technical trade-offs, risks and phased delivery options",
"Reject the project",
"Ask developers to work overtime indefinitely"
],
answer:1,
explanation:"Architects should communicate risks transparently and propose achievable implementation strategies."
}, 
 {
id:161,
difficulty:"hard",
category:"delta-lake",
question:"Which mechanism does Delta Lake use to prevent data corruption during concurrent writes?",
options:[
"Pessimistic Locking",
"Optimistic Concurrency Control",
"Table Locking",
"Distributed Mutex"
],
answer:1,
explanation:"Delta Lake uses optimistic concurrency control. Conflicting commits are detected during transaction commit rather than locking the table."
},

{
id:162,
difficulty:"hard",
category:"delta-lake",
question:"What is stored inside the Delta _delta_log directory?",
options:[
"Spark cache",
"Transaction log JSON and checkpoint files",
"Python source code",
"Compressed Parquet files only"
],
answer:1,
explanation:"The transaction log stores every table version, commit information and metadata required for ACID transactions."
},

{
id:163,
difficulty:"hard",
category:"delta-lake",
question:"Running VACUUM with an aggressively low retention period can cause which problem?",
options:[
"Faster SQL execution",
"Loss of Time Travel capability",
"Reduced Spark memory",
"Improved partition pruning"
],
answer:1,
explanation:"VACUUM permanently removes obsolete files. If retained for too short a period, historical versions become unrecoverable."
},

{
id:164,
difficulty:"hard",
category:"databricks",
question:"Which strategy best supports idempotent ETL pipelines?",
options:[
"INSERT only",
"MERGE using business keys",
"DELETE entire table daily",
"Append duplicate records"
],
answer:1,
explanation:"MERGE operations using business keys allow safe reruns without creating duplicates."
},

{
id:165,
difficulty:"hard",
category:"databricks",
question:"A child notebook succeeds but the parent workflow fails. Which feature helps determine exactly where execution stopped?",
options:[
"Notebook comments",
"Job Run Timeline",
"Workspace Browser",
"SQL History"
],
answer:1,
explanation:"The Job Run Timeline provides execution details, dependencies and failures across workflow tasks."
},

{
id:166,
difficulty:"hard",
category:"kafka",
question:"Which Kafka delivery guarantee prevents duplicate processing when correctly implemented?",
options:[
"At-most-once",
"Exactly-once",
"Best-effort",
"Round Robin"
],
answer:1,
explanation:"Exactly-once semantics combine idempotent producers and transactional processing to avoid duplicates."
},

{
id:167,
difficulty:"hard",
category:"aws",
question:"During migration from self-managed Kafka to Amazon MSK, what minimizes downtime?",
options:[
"Stop production immediately",
"Run both clusters in parallel with replication and cut over after validation",
"Delete the existing cluster",
"Change topic names during migration"
],
answer:1,
explanation:"A phased migration with replication reduces risk and allows rollback."
},

{
id:168,
difficulty:"hard",
category:"azure",
question:"When would Azure Event Hubs be preferred over Kafka?",
options:[
"When using Microsoft's managed event streaming ecosystem",
"When running Oracle databases",
"For storing backups",
"For serving static web pages"
],
answer:0,
explanation:"Event Hubs integrates closely with Azure services and provides managed event streaming."
},

{
id:169,
difficulty:"hard",
category:"bedrock",
question:"What is a major advantage of Amazon Bedrock compared with self-hosted LLM infrastructure?",
options:[
"No prompt engineering required",
"Managed foundation models without GPU infrastructure management",
"Unlimited free inference",
"Automatic application development"
],
answer:1,
explanation:"Bedrock removes operational overhead for hosting and scaling foundation models."
},

{
id:170,
difficulty:"hard",
category:"ai-security",
question:"What is Prompt Injection?",
options:[
"Compressing prompts",
"Manipulating an LLM into ignoring intended instructions",
"Increasing token limits",
"Encrypting prompts"
],
answer:1,
explanation:"Prompt injection attempts to override or manipulate the model's intended behavior."
},

{
id:171,
difficulty:"hard",
category:"rag",
question:"Which mitigation best reduces prompt injection attacks in a RAG system?",
options:[
"Increase temperature",
"Validate retrieved content and separate system prompts from user input",
"Disable embeddings",
"Reduce chunk size only"
],
answer:1,
explanation:"Input validation, prompt isolation and content filtering reduce prompt injection risks."
},

{
id:172,
difficulty:"hard",
category:"vector-db",
question:"As a vector database grows to billions of embeddings, what becomes increasingly important?",
options:[
"Notebook themes",
"Efficient ANN indexing and sharding",
"Longer prompts",
"CSV compression"
],
answer:1,
explanation:"Approximate Nearest Neighbor indexing and sharding are critical for scalability."
},

{
id:173,
difficulty:"hard",
category:"kubernetes",
question:"What Kubernetes feature automatically replaces failed containers?",
options:[
"ConfigMap",
"Deployment Controller",
"Secret",
"Ingress"
],
answer:1,
explanation:"Deployments continuously monitor pod health and recreate failed instances."
},

{
id:174,
difficulty:"hard",
category:"kubernetes",
question:"Which Kubernetes object should store database passwords?",
options:[
"ConfigMap",
"Secret",
"Deployment",
"Namespace"
],
answer:1,
explanation:"Sensitive credentials belong in Kubernetes Secrets rather than ConfigMaps."
},

{
id:175,
difficulty:"hard",
category:"dr",
question:"Which Disaster Recovery metric defines acceptable data loss?",
options:[
"MTTR",
"RPO",
"Latency",
"Throughput"
],
answer:1,
explanation:"Recovery Point Objective (RPO) specifies how much data loss is acceptable."
},

{
id:176,
difficulty:"hard",
category:"dr",
question:"Which metric measures acceptable recovery time after a failure?",
options:[
"RTO",
"RPO",
"TPS",
"CPU"
],
answer:0,
explanation:"Recovery Time Objective (RTO) defines how quickly services must be restored."
},

{
id:177,
difficulty:"hard",
category:"architecture",
question:"Which deployment strategy minimizes production risk during major releases?",
options:[
"Big Bang",
"Blue-Green Deployment",
"Manual Copy",
"Weekend Deployment Only"
],
answer:1,
explanation:"Blue-Green deployments enable fast rollback with minimal downtime."
},

{
id:178,
difficulty:"hard",
category:"architecture",
question:"What is the primary benefit of a Canary Deployment?",
options:[
"Lower storage cost",
"Gradually expose new releases to a subset of users",
"Compress Docker images",
"Increase Spark partitions"
],
answer:1,
explanation:"Canary deployments reduce deployment risk by limiting initial exposure."
},

{
id:179,
difficulty:"hard",
category:"observability",
question:"Which practice enables correlation between application logs, metrics and traces?",
options:[
"Random request IDs",
"Correlation IDs",
"CSV exports",
"Manual timestamps"
],
answer:1,
explanation:"Correlation IDs allow end-to-end request tracking across distributed services."
},

{
id:180,
difficulty:"hard",
category:"leadership",
question:"During an executive architecture review, what should be the primary focus?",
options:[
"Framework syntax",
"Business outcomes, risks, cost, scalability and security",
"Notebook formatting",
"Programming language comparisons"
],
answer:1,
explanation:"Senior architects communicate business value and architectural trade-offs rather than low-level implementation details."
},
 {
id:181,
difficulty:"hard",
category:"scenario-databricks",
question:"A Databricks workflow consisting of one parent job and twelve child jobs runs successfully in UAT but intermittently fails in Production. What should be investigated FIRST?",
options:[
"Increase cluster size",
"Review Job Run history, Cluster Event Logs, Driver Logs and failed child task dependencies",
"Restart the Databricks workspace",
"Reinstall the Databricks Runtime"
],
answer:1,
explanation:"Start with evidence. Job history, cluster events, driver logs, executor logs and dependency chains usually identify whether the failure is application, infrastructure or orchestration related."
},

{
id:182,
difficulty:"hard",
category:"scenario-spark",
question:"A Spark job processing 10GB daily suddenly requires four times more execution time after a new customer was onboarded. The code has not changed. What is the MOST likely cause?",
options:[
"Python version changed",
"Data skew caused by uneven partition distribution",
"Notebook permissions changed",
"Delta transaction log corruption"
],
answer:1,
explanation:"Large customers often introduce skew where one partition contains significantly more data than others."
},

{
id:183,
difficulty:"hard",
category:"scenario-rag",
question:"Business users report that the chatbot provides different answers to the same question every day. Which component should be investigated first?",
options:[
"Notebook execution time",
"Retriever quality, embedding consistency and document versioning",
"Driver memory",
"Delta OPTIMIZE schedule"
],
answer:1,
explanation:"Inconsistent retrieval caused by stale embeddings, document changes or poor chunking commonly results in inconsistent RAG responses."
},

{
id:184,
difficulty:"hard",
category:"scenario-monitoring",
question:"A production API response time increased from 200ms to 3 seconds. CPU and memory utilization remain normal. What should be checked first?",
options:[
"Upgrade VM size",
"Distributed tracing to identify slow downstream dependencies",
"Restart Kubernetes",
"Increase Spark executors"
],
answer:1,
explanation:"Stable infrastructure metrics suggest latency originates from downstream dependencies, databases or external APIs."
},

{
id:185,
difficulty:"hard",
category:"scenario-aws",
question:"A CloudFront distribution serves outdated JavaScript after deployment. Which action should be performed first?",
options:[
"Increase EC2 instances",
"Invalidate the CloudFront cache",
"Restart Route53",
"Delete the S3 bucket"
],
answer:1,
explanation:"CloudFront caches content globally. Cache invalidation forces edge locations to retrieve updated files."
},

{
id:186,
difficulty:"hard",
category:"scenario-bedrock",
question:"Your organization plans to migrate from locally hosted Llama models to Amazon Bedrock. Which migration strategy minimizes risk?",
options:[
"Big Bang migration",
"Parallel deployment with A/B validation and rollback",
"Delete local infrastructure immediately",
"Retrain every model first"
],
answer:1,
explanation:"Parallel deployment enables comparison, rollback and controlled production rollout."
},

{
id:187,
difficulty:"hard",
category:"scenario-security",
question:"A PCI DSS audit discovers application credentials stored in a Git repository. What should happen immediately?",
options:[
"Ignore because the repository is private",
"Rotate credentials, remove secrets, migrate to Secrets Manager or Key Vault and audit access",
"Increase repository permissions",
"Rename the repository"
],
answer:1,
explanation:"Credentials should be rotated immediately because exposure cannot be ruled out."
},

{
id:188,
difficulty:"hard",
category:"scenario-cost",
question:"Monthly Databricks costs have doubled although daily data volume has remained constant. Which area should be reviewed first?",
options:[
"Notebook color theme",
"Cluster utilization, autoscaling settings, idle clusters and job scheduling",
"Python version",
"Unity Catalog permissions"
],
answer:1,
explanation:"Idle compute, oversized clusters and disabled auto-termination are common cost drivers."
},

{
id:189,
difficulty:"hard",
category:"scenario-governance",
question:"A regulator requests complete lineage showing where customer data originated, how it was transformed and who accessed it. Which capability satisfies this requirement?",
options:[
"Spark UI",
"Unity Catalog or Microsoft Purview",
"Git History",
"Notebook comments"
],
answer:1,
explanation:"Enterprise governance platforms provide lineage, metadata, auditing and access tracking."
},

{
id:190,
difficulty:"hard",
category:"scenario-leadership",
question:"Business stakeholders request delivery in three months while engineering estimates nine months. What should the Solution Architect do?",
options:[
"Promise three months anyway",
"Present architectural trade-offs, phased delivery and associated risks",
"Reject the project",
"Let developers decide"
],
answer:1,
explanation:"Architects facilitate informed decisions by balancing business priorities with technical feasibility."
},

{
id:191,
difficulty:"hard",
category:"scenario-kafka",
question:"Consumer lag continues increasing even though Kafka brokers are healthy. What should be investigated first?",
options:[
"Producer source code formatting",
"Consumer processing time, partition count and downstream bottlenecks",
"Increase topic names",
"Restart Zookeeper without investigation"
],
answer:1,
explanation:"Lag usually indicates consumers cannot process messages as quickly as producers."
},

{
id:192,
difficulty:"hard",
category:"scenario-databricks",
question:"Delta MERGE operations occasionally fail because another pipeline writes simultaneously. Which Delta feature addresses this?",
options:[
"VACUUM",
"Optimistic Concurrency Control",
"OPTIMIZE",
"Photon"
],
answer:1,
explanation:"Delta detects conflicting concurrent transactions and maintains ACID consistency."
},

{
id:193,
difficulty:"hard",
category:"scenario-ai",
question:"An executive asks why the AI recommendation engine made a particular prediction. Which Responsible AI capability should be available?",
options:[
"GPU Monitoring",
"Model Explainability",
"Notebook Versioning",
"Cluster Policies"
],
answer:1,
explanation:"Explainability provides transparency into model predictions."
},

{
id:194,
difficulty:"hard",
category:"scenario-devops",
question:"A production deployment fails halfway through. Which deployment strategy enables the fastest rollback?",
options:[
"Manual Deployment",
"Blue-Green Deployment",
"FTP Upload",
"Single Server Deployment"
],
answer:1,
explanation:"Blue-Green deployments enable rapid rollback by switching traffic back to the previous environment."
},

{
id:195,
difficulty:"hard",
category:"scenario-observability",
question:"Which telemetry signal most accurately identifies where latency occurs inside a distributed microservice architecture?",
options:[
"CPU %",
"Distributed Trace",
"Disk Space",
"Application Version"
],
answer:1,
explanation:"Distributed traces visualize request flow and latency across every service."
},

{
id:196,
difficulty:"hard",
category:"scenario-dr",
question:"A business requires less than five minutes of data loss after a disaster. Which DR metric defines this requirement?",
options:[
"RTO",
"RPO",
"MTTR",
"SLA"
],
answer:1,
explanation:"Recovery Point Objective specifies the maximum acceptable data loss."
},

{
id:197,
difficulty:"hard",
category:"scenario-performance",
question:"SQL queries against Delta tables become progressively slower despite constant hardware resources. Which maintenance task is commonly forgotten?",
options:[
"VACUUM only",
"OPTIMIZE and statistics maintenance",
"Restart notebooks",
"Increase driver memory"
],
answer:1,
explanation:"Compaction and updated statistics improve query planning and reduce file scans."
},

{
id:198,
difficulty:"hard",
category:"scenario-architecture",
question:"An enterprise wants to support batch analytics, real-time dashboards and Generative AI using the same data platform. Which architecture best fits?",
options:[
"Traditional OLTP Database",
"Lakehouse Architecture",
"Desktop Database",
"Shared File Server"
],
answer:1,
explanation:"A Lakehouse supports BI, streaming, AI and ML workloads from a unified data platform."
},

{
id:199,
difficulty:"hard",
category:"scenario-cloud",
question:"Your company wants to migrate workloads from on-premises to AWS while minimizing operational overhead. Which architectural principle is most appropriate?",
options:[
"Lift-and-shift every server unchanged",
"Adopt managed cloud-native services where practical",
"Replace every application immediately",
"Run everything on EC2"
],
answer:1,
explanation:"Managed services such as S3, MSK, Bedrock and RDS reduce operational complexity and improve scalability."
},

{
id:200,
difficulty:"hard",
category:"scenario-executive",
question:"During the final interview, the CIO asks: 'What makes a good Solution Architect?' Which answer is strongest?",
options:[
"Writes the most code",
"Knows every programming language",
"Balances business value, scalability, security, governance, reliability, cost and operational excellence while leading technical decisions",
"Builds dashboards quickly"
],
answer:2,
explanation:"At the architect level, success is measured by making sound technology decisions that deliver sustainable business outcomes, not by writing the most code."
},
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to high-value interview questions from the AI & Data Technologies bank.
// IMPORTANT: These are ZERO-BASED ARRAY INDICES (not question IDs).

const hotsQuestions = [
    // Core AI & Data Fundamentals (0-19)
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,

    // Data Engineering & Architecture (20-39)
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,

    // AI / ML / Analytics (40-59)
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,

    // Cloud, Governance & Big Data (60-79)
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,

    // Advanced Enterprise AI & Data Platform (80-99)
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99
];

