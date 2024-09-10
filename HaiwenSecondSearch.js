const websiteList = [
    { name: "微软bing", address: "https://cn.bing.com/search?q=" },
    { name: "百度", address: "https://www.baidu.com/s?wd="},
    { name: "github", address: "https://github.com/search?q=" },
    { name: "B站", address: "https://search.bilibili.com/all?keyword=" },
    { name: "DOI1", address: "https://www.sci-hub.wf/" },
    { name: "DOI2", address: "https://www.sci-hub.ee/" },
    { name: "DOI3", address: "https://www.sci-hub.ren/" },
    { name: "DOI4", address: "https://pubmed.ncbi.nlm.nih.gov/" },
    { name: "英→中", address: "https://fanyi.baidu.com/mtpe-individual/multimodal?&lang=en2zh&query="},
    { name: "中→英", address: "https://fanyi.baidu.com/mtpe-individual/multimodal?&lang=zh2en&query="},
    { name: "知乎", address: "https://www.zhihu.com/search?type=content&q=" }
];

GM_addStyle(`
    #floatingToolbar {
        position: absolute;
        background: lightblue;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        display: none;
        z-index: 9999;
    }
    #floatingToolbar button {
        margin: 2px;
        padding: 3px 6px;
        font-size: 12px;
    }
`);

const toolbar = document.createElement('div');
toolbar.id = 'floatingToolbar';
document.body.appendChild(toolbar);

websiteList.forEach(site => {
    const button = document.createElement('button');
    button.textContent = site.name;
    button.addEventListener('click', () => {
        const selection = window.getSelection().toString().trim();
        if (selection) {
            window.open(site.address + encodeURIComponent(selection), '_blank');
        }
    });
    toolbar.appendChild(button);
});

document.addEventListener('mouseup', (e) => {
    const selection = window.getSelection().toString().trim();
    if (selection) {
        const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
        toolbar.style.left = `${rect.left + window.pageXOffset}px`;
        toolbar.style.top = `${rect.bottom + window.pageYOffset}px`;
        toolbar.style.display = 'block';
    } else {
        toolbar.style.display = 'none';
    }
});

document.addEventListener('mousedown', (e) => {
    if (!toolbar.contains(e.target)) {
        toolbar.style.display = 'none';
    }
});
