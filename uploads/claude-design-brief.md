# Brief — อัปเดต Mobile Lab เป็นธีม Digital Blue (สำหรับ Claude Design)

> เอา brief นี้ไปวางใน Claude Design (ไฟล์ `Mobile Lab.dc.html`) เพื่อสั่งอัปเดตแบบ · เปลี่ยนแค่ **โลโก้ + สี** ที่เหลือคงเดิมทั้งหมด

## เปลี่ยนอะไรบ้าง

**1. สี accent: แดง → น้ำเงิน**
- เปลี่ยน `#FF0000` → **`#0000FF` (Digital Blue)** ทุกที่: ลิงก์เมนู, หน้า active, ปุ่ม submit, ราคา (price), ปุ่มปีที่ไม่ได้เลือก, ขอบ input ตอน focus
- ปุ่ม hover เข้ม: `#CC0000` → **`#0000CC`**
- ใน prop editor `accent`: default = `#0000FF`, options = `["#0000FF","#00FF00","#111111","#666666"]`

**2. โลโก้ใหม่**
- แทน `assets/logo.svg` ด้วยโลโก้ใหม่: wordmark **"Mobile Lab"** (slab serif เดิม) + subtitle **"project"** ตัวสเปซห่างข้างล่าง · จุด "o" ใน Mobile = **วงกลมน้ำเงิน #0000FF สะอาด** (แทน ink-splat ดำ) + จุดน้ำเงินเล็กที่ "o" ของ project
- ไฟล์: `mobile-lab-logo-blue.png` (แนบให้แล้ว) — ถ้าต้องการเวกเตอร์คมสุด ใช้ไฟล์ต้นฉบับจาก Google Drive

**3. Interaction (จากหน้า Cursors ใน PDF)**
- hover / selection = **ตัวอักษรขาวบนพื้นน้ำเงิน** (`color:#fff; background:#0000FF`) — เหมือนเดิมแค่เปลี่ยนสี
- โมทีฟ **จุดน้ำเงิน** (blue dot) ใช้เป็น accent/bullet ได้ (จาก logo + cursors)

## คงเดิมทั้งหมด (อย่าเปลี่ยน)
- ฟอนต์: Courier New (mono) เป็นหลัก · Source Serif 4 เฉพาะ `<strong>`
- หัวข้อทุกหน้า (รวมฟอร์ม Contact/Shop) = mono bold h2/h3
- คอลัมน์เนื้อหา 607px จัดกลาง · header บาร์ 72px · footer sticky
- โครงหน้า: News (landing), Press, About, Projects, Communities, Shop, Contact
- Pagination = ปุ่มเลือกปี (browse by year)
- เส้นคั่น #CCCCCC / hairline #ECECEC · มุมเหลี่ยม (radius 0)

## รอยืนยัน
- **สีเขียว `#00FF00`** อ้างถึงในไฟล์แบรนด์ด้วย แต่ยังไม่ระบุการใช้ — เป็น secondary accent? ใช้ตรงไหน (เช่น hover ที่สอง, highlight, หมวด)? บอกมาจะได้ใส่ให้ถูก

---
*prompt สั้นสำหรับวางใน Claude Design:*
> "อัปเดตธีม: เปลี่ยน accent จากแดง #FF0000 เป็นน้ำเงิน #0000FF ทุกจุด, ปุ่ม hover เป็น #0000CC, prop accent default #0000FF (options #0000FF/#00FF00/#111111/#666666), เปลี่ยนโลโก้เป็นเวอร์ชันวงกลมน้ำเงิน (แนบไฟล์), hover เป็นตัวขาวบนพื้นน้ำเงิน — ที่เหลือคงเดิมทั้งหมด"
