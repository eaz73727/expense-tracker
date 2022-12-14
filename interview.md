### 為什麼會選擇這個專案？  
`主要是因為本身有記帳的習慣，所以想要試著製作屬於自己的記帳本，  
而製作的同時也能熟練並且內化自己所掌握的技術，這是個雙贏的選擇。`  
### 你使用了甚麼技術？  
`技術上我選用了 node.js 環境上的 express 並且搭配樣板引擎 express-handlebars 製作並建立起網站的基本渲染與路由，  
而資料庫我選擇了 mongoDB 搭配 mongoose ，因為它是我相對熟悉的資料庫，而且重點是＂它是免費的＂，降低了我製作專案時所衍生出的成本。  
而驗證登入我選擇了 express-session 儲存使用者狀態並且搭配 passport 做登入驗證，它提供了多種登入方案並且設置起來相對快速也足夠安全  
，而目前的專案套用的是它提供的本地登入專案。`    
### 哪部分你相對能掌握？哪裡花了最多時間？  
`在 express 建置路由並且設置錯誤處理與資料處理渲染上是我相對能掌握的部分，  
而在關聯資料表上我花費了比較大的精力，而這也是製作這個專案的目的，  
我想透過實作專案並且試著解決衍生出來的問題，這樣才有辦法更熟悉並了解所使用的工具。`  
### 過程碰到了甚麼困難？又如何克服？  
`我在設計 record 資料表裡面的 date 這個項目時有發現了一些問題，我希望我所設置的類別是日期物件，而這儲存方式本身沒有問題，  
而在新增資料與渲染全部 record 資料時也沒有問題，但是在我設置 修改路由 的時候我發現我無法將設置的時間物件傳入樣板引擎中，  
所以我研究了一下 mdn 上關於 date 這個物件描述與函式，並且查找到了 toISOString() 的方式可以將物件轉換成 input 能讀取的字串  
並且成功渲染。`  
### 過程中你有對哪項技術有特別深刻的學習？  
`javascript 是屬於同步的程式語言，意即它一次只能做一件事情，但是遇到非同步的事件時，它就會將它放到 stack 上，並且  
會等到所以同步事件的程式碼執行完成之後才會依序執行等待處理中的非同步事件，而這在我設計種子資料時會發生一個問題，  
就是如果我想新增資料並且需要關聯其他資料表時，我會使用到迴圈，但是迴圈是同步事件，而我又希望我的種子程式能在執行  
完成時自動關閉(process.exit())，這會導致我在我在關聯資料表時被放在 stack 上面待處理事件還沒有被執行程式就關閉了  
所以我在設計種子資料時有使用到 Promise.all() 這個非同步函式，簡單的說它會等待裡面的所有非同步事件有回傳資料時才會  
執行下一步程序，從而成功設置種子資料。而我在這上面不只學習到了 Promise.all() 這個函式，也有對非同步事件有更深刻的  
了解`  
