# **1. Cómo identificar fallos de *linter***

Los *linters* (ESLint, Pylint, Flake8, etc.) siempre muestran **errores de sintaxis o estilo**.

Busca en el log líneas como:

### **Palabras clave que delatan fallos de linter:**

* `error`
* `warning`
* `lint`
* `eslint`
* `pylint`
* `style`
* `failed`

---

# **2. Cómo identificar fallos en *tests***

Los fallos de pruebas unitarias/automatizadas siempre muestran:

### **Palabras clave:**

* `FAIL`, `FAILED`
* `ERROR`
* `AssertionError`
* `expected ... but got ...`
* `Test failed`
* `Process completed with exit code 1`

# **3. Cómo identificar fallos de *cobertura* (coverage)**

Un fallo de cobertura ocurre cuando **la cobertura es menor a un porcentaje mínimo configurado**.

### **Palabras clave:**

* `coverage`
* `threshold`
* `missing`
* `Below coverage threshold`
* `lines: XX% (min XX%)`

### **Ejemplo típico:**

Con Jest:

```
Coverage summary:
Statements   : 45% (required 70%)
```

Aquí tienes una **versión corta y directa**:

---

# Por qué no es posible asegurar al 100% la autoría

1. **Los textos no tienen huella digital.**
   No existe ningún metadato o marca que indique si algo lo escribió una persona o una IA.

2. **Los detectores fallan.**
   Producen falsos positivos y falsos negativos porque se basan solo en patrones estadísticos.

3. **Un texto humano puede parecer de IA y viceversa.**
   Con ligeras ediciones, un texto generado por IA puede volverse indistinguible de uno humano.

4. **El estudiante puede mezclar fuentes.**
   No se puede saber qué porcentaje proviene de IA, del estudiante o de internet.

👉 **Conclusión:** No hay forma técnica ni lógica de demostrar con certeza la autoría. Los detectores no son evidencia.

---

# Políticas razonables de uso de IA en educación

1. **Transparencia:**
   Pedir a los estudiantes declarar cuándo usan IA y con qué propósito.

2. **Evaluar el proceso, no solo el resultado:**
   Borradores, explicaciones, pasos, defensas orales.

3. **Uso permitido como apoyo, no como sustituto:**
   OK para ideas, revisión, resumen;
   NO para entregar trabajos totalmente generados.

4. **Formar en pensamiento crítico:**
   Enseñar a verificar errores, sesgos y alucinaciones de la IA.

5. **No usar detectores para sancionar:**
   Si hay dudas, hacer una entrevista breve o pedir que el estudiante explique su trabajo.
