---
title: "SciKey: End-to-End Scientific Knowledge Graph from Open Research Repositories"
published: 2025-12-12
description: End-to-end data pipeline that transforms open research data into a semantically enriched knowledge graph using relational modeling, semantic enrichment, and graph databases.
image: /SciKey-web.jpg
tags: [Python, SQL, MySQL, Neo4j, Wikidata, Docker, Django]
category: ETL
draft: false
---

<!-- 
<div style="float: left; margin: 0 1.5rem 1rem 0; text-align: center; width: 300px;">
  <img src="/SciKey-web.jpg" alt="SciKey webpage" width="100%" style="border-radius: 12px;" />
  <p style="font-size: 0.75rem; color: #aaa; margin-top: 0.5rem;">
       Cover image source: <a href="https://unsplash.com/@porkbellysteve" target="_blank">Stephen Andrews</a> on <a href="https://unsplash.com/photos/hKfJZo_6wzw" target="_blank">Unsplash</a>
  </p>
</div>

<p style="margin-top: 0.8rem;">-->
In this capstone project, I designed and implemented an end-to-end data pipeline that transforms unstructured scientific metadata into a structured, semantically enriched knowledge graph.

SciKey extracts academic records from the HAL Open Access repository, normalizes them into a relational database, enriches keywords using Wikidata semantic entities, and exposes the resulting graph through an interactive Neo4j-based explorer. The system enables exploration of Document → Keyword → Item → Class relationships, supporting scientific domain analysis and knowledge discovery.


## My Role

I was responsible for the design and implementation of the full data pipeline, including:

- Extracting and preprocessing scientific metadata from the HAL API
- Normalizing raw data into a relational MySQL schema
- Designing a semantic enrichment pipeline to map keywords to Wikidata QIDs
- Implementing a hybrid scoring and validation system using lexical similarity and semantic constraints (P31 / P279)
- Ingesting enriched data into Neo4j and modeling graph relationships
- Developing a Django-based explorer to visualize and query the knowledge graph



## Key Technical Challenges

- Handling ambiguous and noisy free-text scientific keywords
- Designing a reliable keyword-to-Wikidata entity matching strategy
- Applying semantic validation using instance-of (P31) and subclass-of (P279) hierarchies
- Preventing duplication across relational and graph databases
- Orchestrating multiple services using Docker for a reproducible environment

## Model & Validation Summary

A hybrid scoring model was implemented to rank Wikidata candidates for each keyword, combining lexical similarity, contextual signals, and semantic constraints.

- Human-validated accuracy: ~89%
- Validation performed using a manually curated keyword–QID reference dataset
- Key insight: semantic constraints significantly reduce false-positive mappings in ambiguous domains


## 🗄️ System Architecture

The pipeline consists of four main stages:

1. HAL metadata extraction and preprocessing (Python)
2. Relational normalization and storage (MySQL)
3. Semantic enrichment and entity mapping (Wikidata API)
4. Knowledge graph construction and exploration (Neo4j + Django)

All services are containerized using Docker for reproducibility and local deployment.


---

## 🔗 GitHub Repository

[See GitHub Repository](https://github.com/santre8/SciKey.git)  

