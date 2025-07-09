---
title: Biomarker Selection from Gene Expression Data Using PCA
published: 2025-06-14
description: Breast cancer tissue classification using PCA and RFE instead of autoencoders.
image: /cover-pca-biomarker.jpg
tags: [PCA, Biomarkers, Breast Cancer, scikit-learn, FeatureSelection]
category: MLproject
draft: false
---


  <p style="font-size: 0.75rem; color: #aaa; margin-top: 0.5rem;">
      Cover image source: <a href="https://unsplash.com/es/@sangharsh_l?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Sangharsh Lohakare</a> on <a href="https://unsplash.com/es/fotos/un-primer-plano-de-una-estructura-de-una-estructura-Iy7QyzOs1bo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>
  </p>


In this project, I explored a **lightweight and interpretable method** to classify breast cancer tissue samples (tumor vs. normal) using gene expression data. The methodology is inspired by the paper:

**Al Abir et al. (2022)** – *Biomarker identification by reversing the learning mechanism of an autoencoder and recursive feature elimination*.

Instead of replicating the autoencoder-based pipeline, I proposed a simpler method using **Principal Component Analysis (PCA)** followed by **Recursive Feature Elimination (RFE)** and logistic regression.

This project emphasizes:
- Biomedical interpretability
- Dimensionality reduction with PCA
- Model performance on small, high-dimensional datasets
- A practical alternative to deep learning in constrained environments

---

## 🧰 Tools & Techniques
- Python (pandas, scikit-learn, matplotlib)
- PCA
- RFE
- Logistic Regression

---

## 🔗 GitHub Repository

[View on GitHub](https://github.com/santre8/Biomarker-Selection-PCA-RFE-Multiclass-Cancer)
