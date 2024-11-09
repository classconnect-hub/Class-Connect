const qbData = [
    {
        "id": 1,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DAA",
        "title": "DAA QB - TT2",
        "link": "qb/TT2/DAA"
    },
    {
        "id": 2,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DSA",
        "title": "DSA QB - TT2",
        "link": "qb/TT2/DSA"
    },
    {
        "id": 3,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DSDS",
        "title": "DSDS QB - TT2",
        "link": "qb/TT2/DSDS"
    },
    {
        "id": 4,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "AEM-1",
        "title": "AME1 QB - TT2",
        "link": "qb/TT2/M3"
    },
    {
        "id": 5,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "OOPM",
        "title": "OOPM QB - TT2",
        "link": "qb/TT2/OOPM"
    },
    {
        "id": 6,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DAA",
        "title": "DAA QB - TT1",
        "link": "qb/TT1/DAA"
    },
    {
        "id": 7,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DSA",
        "title": "DSA QB - TT1",
        "link": "https://internal-territory-dee.notion.site/DSA-8e81c17453df4830a0bdabb28ac9e524?pvs=74"
    },
    {
        "id": 8,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DSDS",
        "title": "DSDS QB - TT1",
        "link": "https://internal-territory-dee.notion.site/DSDS-f6c1861b4c184b0fa59e849dc6854d47?pvs=4"
    },
    {
        "id": 9,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "AEM-1",
        "title": "AME1 QB - TT1",
        "link": "https://internal-territory-dee.notion.site/Maths-3-d1f7edfe92fe478f9dd9ae962a7421d6?pvs=4"
    },
    {
        "id": 10,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "OOPM",
        "title": "OOPM QB - TT1",
        "link": "qb/TT1/OOPM"
    },
    {
        "id": 11,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DSDS",
        "title": "DSDS TT1 QB",
        "link": "https://internal-territory-dee.notion.site/DSDS-f6c1861b4c184b0fa59e849dc6854d47?pvs=4"
    },
    {
        "id": 12,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "OOPM",
        "title": "OOPM TT1 QB",
        "link": "https://internal-territory-dee.notion.site/OOPM-818588d0d2b4456bbae163237f0f52f0?pvs=4"
    },
    {
        "id": 13,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DAA",
        "title": "DAA QB - Aayush",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EY8q0Iza5ydEjJR4AlW7HasBMn6CTbe9Hs4a9aTCcU10nA?e=G3hiKA"
    },
    {
        "id": 14,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DAA",
        "title": "DAA QB - TT1",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EaiMViYvv3FOnm13Cjjve-EBFBpnElLWmJ44EZvTiF7gtA?e=mPJX3n"
    },
    {
        "id": 15,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "DAA",
        "title": "DAA QB - Vishva",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ETwUU2RvlxNFmTIM1UGVANgB-U9Osh0SqxYb_udJYbHJiA?e=h5EZDH"
    },
    {
        "id": 16,
        "department": "AI-DS",
        "semester": "Sem3",
        "subject": "OOPM",
        "title": "OOPM imp",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EQywYuMtceFOiYitn1tRRngB-bPQx_2_7wKcwVNN03iDeQ?e=XFaIse"
    },
    {
        "id": 17,
        "department": "FY",
        "semester": "Sem1",
        "subject": "BEE",
        "title": "BEE QB ans 23-24",
        "link": "https://internal-territory-dee.notion.site/BEE-1b4cdb8b86cd4aa08b541c8e16b30a9e?pvs=4"
    },
    {
        "id": 18,
        "department": "FY",
        "semester": "Sem1",
        "subject": "BEE",
        "title": "BEE TT1 QB 22-23",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EVNoPsNTfIxAutx-7XwD_0MBGNY2Px5hWPX9_r-6Ls1hJw?e=gmkASR"
    },
    {
        "id": 19,
        "department": "FY",
        "semester": "Sem1",
        "subject": "BEE",
        "title": "BEE TT1 QB answers",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EXlWXtK_VhVPjrKBSB-TkvwBxWoc1E8IGTbqYHVLnSbqWA?e=Pl403K"
    },
    {
        "id": 20,
        "department": "FY",
        "semester": "Sem1",
        "subject": "BEE",
        "title": "BEE TT2 QB 22-23",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EfQk5TC31ElOutWyv8TuIo8BXJMQI_XNoOCpX0PNmYwrPA?e=F0JLil"
    },
    {
        "id": 21,
        "department": "FY",
        "semester": "Sem1",
        "subject": "BEE",
        "title": "BEE TT2 QB answers",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ear_Ht6Il5lJiy8NnCp8Qh4BTw_gVypGHbPAE6juKi8Gwg?e=IqlxWp"
    },
    {
        "id": 22,
        "department": "FY",
        "semester": "Sem1",
        "subject": "Chemistry",
        "title": "Water Sums",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EbWxns_S0ZdFrLLF2Ftc6ngBNcEA42QDHwKYiwtYK9lxUg?e=0bwW9k"
    },
    {
        "id": 23,
        "department": "FY",
        "semester": "Sem1",
        "subject": "Chemistry",
        "title": "Fuels and Combustion Sums",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EXVeIyZk_mhGjpdGOFG0Cx0BE84n-jXus8_BViBEM1_Vrg?e=2bD3ft"
    },
    {
        "id": 24,
        "department": "FY",
        "semester": "Sem1",
        "subject": "Chemistry",
        "title": "Chemistry QB ans 23-24",
        "link": "https://internal-territory-dee.notion.site/Chemistry-843cacf564b74b1ea5714c4648364448?pvs=4"
    },
    {
        "id": 25,
        "department": "FY",
        "semester": "Sem1",
        "subject": "Mechanics",
        "title": "Mechanics QB ans 23-24",
        "link": "https://internal-territory-dee.notion.site/Mechanics-8c7048c9d21047f19631813679433bae?pvs=4"
    },
    {
        "id": 26,
        "department": "FY",
        "semester": "Sem2",
        "subject": "CP",
        "title": "Algo",
        "link": "https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ed-WH2PSI-pEkDO4VF6SNhQBkEXA9Z297Gya_D81bbQSQg?e=RUCO0T"
    }
]
export default qbData;