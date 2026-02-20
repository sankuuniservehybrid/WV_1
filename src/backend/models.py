import pymysql

# Connect to MySQL
conn = pymysql.connect(
    host="192.168.0.198",
    port = 3306,
    user="UNISERVE",
    password="Uniserve123@$",
    database="UNISERV_DB_1"
)
cursor = conn.cursor()