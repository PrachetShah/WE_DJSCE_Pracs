# class A:
#     def test1(self):
#         print('test of A called')

# class B(A):
#     def test(self):
#         print('test of B Called')

# class C(A):
#     def test(self):
#         print('test of C')

# class D(B,C):
#     def test2(self):
#         print('test of D')

# obj = D()
# obj.test()

# class A:
#     def __init__(self, x):
#         self.x = x
#     def count(self,x):
#         self.x = self.x +1

# class B(A):
#     def __init__(self, y=0):
#         A.__init__(self, 3)
#         self.y = y
#     def count(self):
#         self.y += 1
#     def test(self):
#         print('test of B Called')

# obj = B()
# obj.count()
# print(obj.x, obj.y)

# print(8.3//2)

class student:
    def __init__(self):
        self._marks = 97
        self.__cgpa = 9.7
    def display(self):
        print(self._marks)

obj = student()
obj.display()

# def fn(x):
#     try:
#         print(5/x)
#     except:
#         print('Error')
# fn(0)

# class Demo:
#     def __init__(self):
#         self.x = 1
#     def change(self):
#         self.x = 10

# class Derived(Demo):
#     def change(self):
#         self.x = self.x + 1
#         return self.x 

# obj = Derived()
# print(obj.change())

# def fn(x):
#     try:
#         print(5/x)
#     except ZeroDivisionError:
#         print('Error Zero Div')
#     else:
#         print('Blocked')
#     finally:
#         print('Finaly Blocked')
# fn(0)

# class A:
#     def __str__(self):
#         return '1'

# class B(A):
#     def __init__(self):
#         super().__init__()

# class C(A):
#     def __init__(self):
#         super().__init__()

# obj1 = B()
# obj2= A()
# obj3= C()

# print(obj1, obj2, obj3)

# class Invalid(Exception):
#     pass

# class Mobile:
#     def __init__(self, mob_no):
#         self.__mob_no = mob_no
#     def validate(self):
#         try:
#             if(len(self.__mob_no)!=10):
#                 raise Invalid
#             else:
#                 print('Valid Mobile Num')
#         except Invalid:
#             print('Invalid Len - inside Class')
#         print('Inside the Class')

# mob = Mobile('9342')
# try:
#     mob.validate()
#     print('Outside the Class')
# except Invalid:
#     print('Invalid len - Outside Class')