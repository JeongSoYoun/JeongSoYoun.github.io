---
title: 'GPT Review'
date: 2022-04-25 00:00:00
category: 'ML/AI'
tags: ['Deep Learning', 'NLP', 'PyTorch']
summary: 'GPT Model for NLP'
image: 'gpt'
draft: false
---

<br /><img src="./images/openai.png" width="600" height="300">

<br />

> ### Introduction
>
> From Transformer model with _attention_ , we have seen that NLP task can be done without RNN architecture, which has brought phenomenal development for NLP. This model has become fundamental architecture for NLP models such as BERT and GPT, which are two top tier NLP model nowadays. Today, I am going to talk about **_GPT_** model.

<br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GPT, _Generative Pre Training_, is a language model developed by **Open AI** with combination of generative pre-training and discriminative fine-tuning process. The goal of GPT is making a general language model(pre-training) that can be adapted to lots of tasks with small adjustment of the model(fine-tuning).

<br />

> ### Trainig Process
>
> From pre-training to fine-tuning

<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; First, pre-training(unsupervised learning with set of large-corpus of text data) is done to learn the parameters of language model. Since, the goal of unsupervised learning is to initialize the training, the objectives of learning remain same with supervised learning. After pre-training, supervised learning with same parameters that have pre-trained is processed with fine-tuning of some change of input tokens and the weight of the output layer.

<br />

> ### Architecture

<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From pre-training to fine-tuning, architecture of GPT is **_Transformer Model_**. Interesting point is _GPT_ only uses **Decoder** layer which has _masked self attention layer_. Objective of pre-training is given a sequence of words with unlabeled dataset U(u*1 ... u_l) to maximize the likelihood of the probability to predict the word of position \_l* given _1 ... l-1_ words

<br /> After pre-training, sequence of input data (x\*1 to x\*m), which would be the first fine-tuning process with _dlim token_, with label y is given and pass it through pre-trained Transformer model. Then, the output will go through the output linear layer and this would be the second fine-tuning process.
