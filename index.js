const formNode = document.getElementById('form');

const words = [
    {
    "word": "social",
    "score": 1001
    },
    {
    "word": "marital",
    "score": 1000
    },
    {
    "word": "major",
    "score": 999
    },
    {
    "word": "complete",
    "score": 998
    },
    {
    "word": "serious",
    "score": 997
    },
    {
    "word": "economic",
    "score": 996
    },
    {
    "word": "severe",
    "score": 995
    },
    {
    "word": "minimal",
    "score": 994
    },
    {
    "word": "mechanical",
    "score": 993
    },
    {
    "word": "significant",
    "score": 992
    },
    {
    "word": "internal",
    "score": 991
    },
    {
    "word": "environmental",
    "score": 990
    },
    {
    "word": "total",
    "score": 989
    },
    {
    "word": "further",
    "score": 988
    },
    {
    "word": "targeted",
    "score": 987
    },
    {
    "word": "considerable",
    "score": 986
    },
    {
    "word": "potential",
    "score": 985
    },
    {
    "word": "less",
    "score": 984
    },
    {
    "word": "possible",
    "score": 983
    },
    {
    "word": "minimum",
    "score": 982
    },
    {
    "word": "physical",
    "score": 981
    },
    {
    "word": "much",
    "score": 980
    },
    {
    "word": "violent",
    "score": 979
    },
    {
    "word": "temporary",
    "score": 978
    },
    {
    "word": "partial",
    "score": 977
    },
    {
    "word": "massive",
    "score": 976
    },
    {
    "word": "widespread",
    "score": 975
    },
    {
    "word": "endocrine",
    "score": 974
    },
    {
    "word": "sudden",
    "score": 973
    },
    {
    "word": "traumatic",
    "score": 972
    },
    {
    "word": "ligamentous",
    "score": 971
    },
    {
    "word": "consequent",
    "score": 970
    },
    {
    "word": "greater",
    "score": 969
    },
    {
    "word": "extensive",
    "score": 968
    },
    {
    "word": "least",
    "score": 967
    },
    {
    "word": "substantial",
    "score": 966
    },
    {
    "word": "ecological",
    "score": 965
    },
    {
    "word": "brain",
    "score": 964
    },
    {
    "word": "induced",
    "score": 963
    },
    {
    "word": "acute",
    "score": 962
    },
    {
    "word": "subsequent",
    "score": 961
    },
    {
    "word": "profound",
    "score": 960
    },
    {
    "word": "cultural",
    "score": 959
    },
    {
    "word": "posterior",
    "score": 958
    },
    {
    "word": "pelvic",
    "score": 957
    },
    {
    "word": "cellular",
    "score": 956
    },
    {
    "word": "radical",
    "score": 955
    },
    {
    "word": "minor",
    "score": 954
    },
    {
    "word": "emotional",
    "score": 953
    },
    {
    "word": "vascular",
    "score": 952
    },
    {
    "word": "constant",
    "score": 951
    },
    {
    "word": "permanent",
    "score": 950
    },
    {
    "word": "tidal",
    "score": 949
    },
    {
    "word": "functional",
    "score": 948
    },
    {
    "word": "gross",
    "score": 947
    },
    {
    "word": "term",
    "score": 946
    },
    {
    "word": "undue",
    "score": 945
    },
    {
    "word": "wartime",
    "score": 944
    },
    {
    "word": "osmotic",
    "score": 943
    },
    {
    "word": "aortic",
    "score": 942
    },
    {
    "word": "structural",
    "score": 941
    },
    {
    "word": "resulting",
    "score": 940
    },
    {
    "word": "family",
    "score": 939
    },
    {
    "word": "anastomotic",
    "score": 938
    },
    {
    "word": "cortical",
    "score": 937
    },
    {
    "word": "joint",
    "score": 936
    },
    {
    "word": "marked",
    "score": 935
    },
    {
    "word": "behavioral",
    "score": 934
    },
    {
    "word": "focal",
    "score": 933
    },
    {
    "word": "inevitable",
    "score": 932
    },
    {
    "word": "sleep",
    "score": 931
    },
    {
    "word": "extreme",
    "score": 930
    },
    {
    "word": "frequent",
    "score": 929
    },
    {
    "word": "scale",
    "score": 928
    },
    {
    "word": "selective",
    "score": 927
    },
    {
    "word": "biographical",
    "score": 926
    },
    {
    "word": "urethral",
    "score": 925
    },
    {
    "word": "unnecessary",
    "score": 924
    },
    {
    "word": "mucosal",
    "score": 923
    }
    ];

    const disruptArray = words.map(word => word.word);

formNode.addEventListener('submit', async event => {
    event.preventDefault();
    const formFromData = new FormData(formNode);
    const textArray = formFromData.get('textArea').split(' ');

    const newText = textArray.map(word => {
        if(Math.random() < .3) {
            const randomNumber = Math.floor(Math.random() * disruptArray.length);
            return disruptArray[randomNumber]
        }
        return word;
    }).join(' ');
    console.log(newText);
});
