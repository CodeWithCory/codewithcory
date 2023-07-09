---
title: Validating Dynamic Forms With Zod
---
<link rel="stylesheet" href="../../src/main.css" />

[← Code With Cory (Home)](../../index.md)

# Validating Dynamic Forms With Zod

Dynamic forms can be hard to validate. You know, forms where the fields may change depending on an earlier choice?

Take this form, for example. Try changing the selections.

<form>
  <!-- TODO: Make a funny dynamic form example -->
  <label></label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  <input></input>
</form>
<script></script>

