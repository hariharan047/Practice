a,b,c=input("Enter 3 String : ").split(',')
print("First String : ",a)
print("Second String : ",b)
print("Third String : ",c)
print("Length of a : ",len(a))
print("Length of b : ",len(b))
print("length of c : ",len(c))

print("string in uppercase : ",a.upper())
print("checks the string is in upper case : ",a.isupper())
print("string in lowercase : ",b.lower())
print("checks the string is in lowercase : ",b.islower())
print("checks the string is aplhabetic : ",c.isalpha())
print("slice a by index 2 : ",a[2:])
print("slice b to index 4 : ",b[:5])
print("slice",c[2:7])
print("slice a by negative index from end : ",a[-5:-2])
print("gives 3 index value : ",a[3])
print("remove whitespace : ",a.strip())
print("each word starts with uppercase : ",c.title())
print("counts number of time a present in a : ",a.count('a'))
print("first letter captalized : ",b.capitalize())
print("each of starts with lowercase : ",a.casefold())
print("count the number of times hi presnet : ",a.count("hi"))
print("gives true or false : ",b.isascii())
print("check the given string is endwith : ",a.endswith(' '))
print("to find : ",a.find('h'))
print("to find : ",a.find('a',4))
print("reverse the string : ",a[::-1])
print("string to list : ",a.splitlines())







