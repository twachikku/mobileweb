# แบบฝึกหัดที่ 2.1 
ให้พิจารณาหน้าจอตัวอย่างที่กำหนดให้
- ดูว่าควรเลือกใช้ component อะไรในการทำ
- เขียน code ให้ได้หน้าจอดังตัวอย่างในเว็บ https://snack.expo.io/
- ภาพประกอบให้ใช้ ภาพของตนเอง
- ข้อมูลในหน้าจอ ให้แสดง ชื่อ และ รหัสประจำตัว

<img src='/images/lab01_sample.jpg'>

# แบบฝึกหัดที่ 2.2

1. แก้ไข Code จาก  https://snack.expo.io/@twachikk/lab2-starwars
เพื่อแสดงข้อมูลตัวละครจากเรื่อง Star Wars
2. ข้อมูลไฟล์ต่าง ๆ
รายชื่อตัวละคร https://api.twachi.net/starwars/people/index.php 
รูปภาพตัวละครจะอยู่ที่ https://api.twachi.net/starwars/asset/people/{ID}.jpg

3. ให้แก่ไขคำสั่งดังนี้
- ให้ load ข้อมูลรายชื่อ ตัวละครใน https://api.twachi.net/starwars/people/index.php  ซึ่งจะเป็น array 
- นำข้อมูลตัวละครทั้งหมดแสดง โดยใช้ FlatList 
- ตัวอย่าง code 

```javascript
<ScrollView>
<FlatList 
  data={this.data} 
  renderItem={({item}) => <StarWarsCard person={item} />}
/>             
</ScrollView>
```
- ตัวอย่างหน้าจอ
<img src="/images/lab02_starwar.jpg">

- ให้ Login เข้าใช้งาน snack ด้วย account ของตนเอง
- เมื่อแก้ไขแล้วให้บันทึก 
- การส่งงาน ให้โพสภาพหน้าจอ และ URL snack ที่ทำเสร็จแล้ว
