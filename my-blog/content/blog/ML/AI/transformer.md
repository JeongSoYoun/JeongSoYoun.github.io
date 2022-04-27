---
title: '🤖 Transformer Model'
date: 2022-04-18 00:00:00
category: 'ML/AI'
tags: ['Deep Learning', 'NLP', 'PyTorch']
summary: 'Transformer Model Paper Review'
image: 'transformer'
draft: false
---

<br /><img src="./images/google.png" width="600" height="300">

## Introduction

<br />

> ### _Transformer Model: Attention is all you Need_

<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transformer model was published by **Google AI** on 2017, and became fundamental of Natural Language Process Model for the other models such as _BERT_ or _GPT_. What makes Transformer model attractive is, this model never uses **RNN**, one of the greatest sequence model, architecture. It only uses **Attention**.

<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our language has meaningful relationship in sentence, which we called _context_. For human, we can easily guess what _it_ stands for, but for machine learning points of view, it is hard to train what _it_ means in the sentence. The biggest disadvantage of RNN is, this model only depends only short-term memory, so if our input text data set is large, performance of RNN is decreasing. To cover this disadvantage, this is where **Attention** shines, and **Transformer** model only uses this technique.

## Architecture

<br />

> ### _Input - Encoder - Deocder - Output_

<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Transformer model consists of _Encoder_ layer and _Decoder_ layer, which is same architecture with **seq2seq** model, but the inside of each layer has **attention** layer not **RNN**. The most important part of attention in Transforme model is **Self-Attention**.

<br /> Self-Attention directly makes Transformer model see relationships between all words in sentence and figured it out which word to attend importantly. This mechanism is done through _Encoder_ and _Decoder_ layers. Interesting point is, the output of Encoder goes to Decoder layer and use it for the attention to get the relationship between the input and output for training. Illustration of this process would look like this..!😆

<br /><img src="https://3.bp.blogspot.com/-aZ3zvPiCoXM/WaiKQO7KRnI/AAAAAAAAB_8/7a1CYjp40nUg4lKpW7covGZJQAySxlg8QCLcBGAs/s1600/transform20fps.gif" width="600" height="400">

##### From: Google AI Blog

<br /> Let's add more explanation for the mechanism. First, all words in sentence do self-attention and get output which has meaningful relationshop among words. After encoding, target word from Decoder do self-attention, but here comes important feature for Transformer comes in. As we can see from the illustration, Decoder of Transformer sees the part of the target word, not the entire sentence. This technique is called **_Masked-Self-Attention_**. Because of this technique, Transformer model predicts _i_ depends only on the known output at position less than _i_. After completing masked-self-attention, we are doing another attention between the output of masked-self-attention and the output of Encoder.

## Conclusion

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transformer model only uses **Self Attention** for the language model and proves **_Attention is all you Need_** statement. Now, it became fundamental basis of NLP model. It would be excited to see the various application which is built based on Transformer model.
