## 添加动态校验表单规则

```
{
	validator: (rule, value, callback) => {
        const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(value)) {
            callback(new Error(this.$i18n.t('basicInformation.pleaceNumber')));
        } else {
            callback();
        }
     },
	trigger: 'blur',
},
```



