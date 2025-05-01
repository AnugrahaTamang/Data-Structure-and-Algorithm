# Hash Tables

- Hash table is the data structure use to store key-value pairs. Key value pairs mean javascript(object), python(dictionary), Go(maps). But we will not use of them. we will create our own version of hash table. To solve this problem, we will be using a "hash functions"

# Hash function

- Acts like a translator, taking an input of any size(key) and converting it into a fixed size value(hash code) that can be used as an index within the hash table's internal array. This process of mapping arbitrary keys to fixed-length indices is called hashing. Hash function look like:

1. Input - You feed any kind of data into the hash function, like your name, a sentence, or a whole file.
2. Hashing process - The function performs a series of mathematical operations on the input data, essentially scrambling it up in a unique way.
3. Fixed-Size Output - Regardless of the input size, the hash function always splits out a fixed-size value, like a short string of characters or a number.
