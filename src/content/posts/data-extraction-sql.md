---
title: SQL-Based Clinical Data Extraction with MIMIC-IV
published: 2025-05-18
description: Cohort creation, SQL extraction, and ML modeling from ICU data using BigQuery and MIMIC-IV.
#image: /cover-data-extraction.jpg
tags: [MIMIC-IV, SQL, BigQuery, Healthcare, XGBoost]
category: BigQuery
draft: false
---


<div style="float: left; margin: 0 1.5rem 1rem 0; text-align: center; width: 300px;">
  <img src="/cover-data-extraction.jpg" alt="MIMIC-IV Monitor" width="100%" style="border-radius: 12px;" />
  <p style="font-size: 0.75rem; color: #aaa; margin-top: 0.5rem;">
      Cover image source: <a href="https://unsplash.com/@porkbellysteve" target="_blank">Stephen Andrews</a> on <a href="https://unsplash.com/photos/hKfJZo_6wzw" target="_blank">Unsplash</a>
  </p>
</div>

<p style="margin-top: 0.8rem;">
In this project, I extracted and engineered clinical data from the MIMIC-IV database using SQL in BigQuery. The goal was to replicate the patient cohort and features described in Liu et al. (2022), focused on weaning outcomes in ICU patients with sepsis.


As a result, this work bridges medical research with SQL logic and lays the groundwork for machine learning classification tasks, such as predicting weaning success.

## My Role

Responsibilities included defining inclusion and exclusion criteria, designing SQL queries, and engineering over 35 clinical variables. Ethical and bias-related aspects of the data were also reviewed. Additionally, an XGBoost model was trained to evaluate the predictive power of the resulting dataset.

</p>


<div style="clear: both;"></div>

## Key SQL Challenges

- Aligning MIMIC-IV table schemas with clinical concepts (e.g., ventilation windows, extubation logic)
- Deriving composite outcomes like `weaning_success`
- Handling multiple joins across vitals, labs, scoring systems, and therapies

## Model Summary

An XGBoost model was implemented on the extracted dataset, yielding the following insights:

- **AUROC**: ~0.71
- **Challenge**: strong class imbalance (83% class 1)
- **Insights**: importance of data preprocessing

## Ethics

All queries were executed within a secure BigQuery environment using de-identified patient data. CITI training on human subjects research was completed to ensure adherence to ethical data handling standards.

---

## 🔗 GitHub Repository

[See GitHub Repository](https://github.com/santre8/Data_Extraction_SQL)  

