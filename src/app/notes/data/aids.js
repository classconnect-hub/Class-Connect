const aidsData = [
    {
        "id": 1,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths 3 GV Kumbhojkar",
        "name": "from Telegram",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ES-T4iXGjeBFrXtrLKmnJXQBlBRvht5DACIW8lfOxO7ZJw?e=fIizJn"
    },
    {
        "id": 2,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 1",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EezU3p7lJepFsks7_t0tZSUB1kZmu_kvUYU6za-rw1L6ng?e=K9iHgS"
    },
    {
        "id": 3,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 2",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ec7pctViMAJDkgmx2Q431p8BzguvvU3gtyqrz2GWbB2hqg?e=G3GNkf"
    },
    {
        "id": 4,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 3",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EXe_Mr9UbfFPj2-sW-I5gZsB_kgAUC9BvE21iMuCzL79Hw?e=9cPqpe"
    },
    {
        "id": 5,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 4",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ES_tiFG_cuRJk49ZtbBrUbkB6_ZMRo9twz0D6vltTiBvpw?e=DW90pB"
    },
    {
        "id": 6,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 5",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EUBb0PyBAqtLucfeLAzqgoEBpCfFKOEVCDx3gnScw3QiPw?e=jmOg36"
    },
    {
        "id": 7,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "Maths",
        "note": "Maths III mod 6",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ER12BP7fpHNAqceYYdwjxwAB28_LMJuIzLzLQzOHcALicg?e=4wKxel"
    },
    {
        "id": 8,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DAA",
        "note": "DAA Mod - 1,2,3 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EY6QhbV9orlNgHhPK2orvS0BBMR4L7Tiy-zG8ng2vdGLcA?e=glA9rk"
    },
    {
        "id": 9,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DAA",
        "note": "DAA Mod - 4,5,6 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EX2ik4q9-59MgPKNZe6IPUYBg1HuYnSLJdVuZmRnNN2iOQ?e=VSU8AY"
    },
    {
        "id": 10,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DS Mod - 1,2,3 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EaRYTKQl1t1CvQHfbnE9HeYBY63lDitXAW86_HrVN3jCww?e=SfjYzC"
    },
    {
        "id": 11,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DS Mod - 4,5,6 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EbIzpzIDeDBMrE3jbQaNq0cBIBHB4kq-CLxibiVOush_hA?e=bbShKv"
    },
    {
        "id": 12,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSDS",
        "note": "DSGT Mod - 1,2,3 Notes",
        "name": "By Harsh Shingavi",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EWsOnVw7UMpGlHUzYJnem8cBdO8FaWFRobzci32CYwUcbQ?e=NILJBl"
    },
    {
        "id": 13,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "OOPM",
        "note": "Module 1.1 - Java Fundamentals",
        "name": "By Prof. Vaishali Patil",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EQaCFXFLiEpLkT3djDNrn-YBY1JzE45mFbLadSV2BN8xMg?e=L2kq1J"
    },
    {
        "id": 14,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "OOPM",
        "note": "Module 1.2 - Intro to Java",
        "name": "By Prof. Vaishali Patil",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EdIOrlVAu2FBraohI1lKh6sBJt0SkdgFxi5S79VyWMVfaw?e=aP2mc6"
    },
    {
        "id": 15,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "OOPM",
        "note": "Module 1.3 - Java I/O",
        "name": "By Prof. Vaishali Patil",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EcEDADw8pXJNkpkYSRrgJXMBYBK-W36nspvhO2nHvLX6CA?e=XHESgw"
    },
    {
        "id": 16,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "OOPM",
        "note": "Module 1.4 - Class, Object, Method",
        "name": "By Prof. Vaishali Patil",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ef0ImZr735ZJouVrXGpdD2YB0zte7ERP174qfEawbz3xjA?e=PLiAZB"
    },
    {
        "id": 17,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DSA Module 1 PPT",
        "name": "By Prof. Vidya",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EYgvClwtaJxLkjnFyEXurHYBnDzM4gV5gGfw2XzH3cXgKg?e=vFsBDd"
    },
    {
        "id": 18,
        "department": "AIDS",
        "semester": "Sem3",
        "subject": "DSA",
        "note": "DSA Module 1 PPT",
        "name": "By Prof. Swati",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ERDl2-anHgtGjDR_XqbRV1wBWx-0anMO4j4jtgbUVu5IiA?e=2KYmQL"
    }
];

export default aidsData;