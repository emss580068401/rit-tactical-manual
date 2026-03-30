"use strict";

const ISO_CONTENT = [
    `<div class="page cover" style="padding: 0; background: #020617;">
        <div style="height: 100%; width: 100%; position: relative; overflow: hidden;">
            <img src="assets/rit_cover.png" style="width: 100%; height: 65%; object-fit: cover;">
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 45%;
                        background: linear-gradient(transparent, #020617 80%); padding: 2rem 3.5rem;
                        display: flex; flex-direction: column; justify-content: flex-end;">
                <h1 style="font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 900; line-height: 1.1; color: #fff; text-shadow: 0 4px 20px rgba(0,0,0,0.8); margin-bottom: 0.5rem;">RIT 救助技術<br>實戰指引</h1>
                <div style="border-top: 4px solid var(--primary); margin-top: 0.8rem; padding-top: 0.8rem;">
                    <p style="font-size: clamp(0.9rem, 2vw, 1.2rem); font-weight: 700; color: #fff; margin-bottom: 0;">新竹縣政府消防局 職安科 數位教材</p>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">1. 組織與安全之道</h2>
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: #b91c1c;">【局長的話】</h2>
        <div class="quote-box" style="border: 2px solid #2563eb; background: #eff6ff; padding: 1rem;">
            <p style="font-size: 1.15rem; line-height: 1.6; color: #1e293b; font-weight: 500; margin: 0;">
                「消防不僅是勇敢，更是專業。在面對零能見度的高壓場域，經驗傳承與標準化訓練是守護同仁的唯一堡壘。讓每一位兄弟都能安全走出火場，是我們永不妥協的承諾。」
            </p>
            <p style="text-align: right; font-weight: 700; font-size: 1rem; margin-top: 0.5rem;">—— 局長 陳中振</p>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: #b91c1c;">【職安科科長的話】</h2>
        <div class="quote-box" style="border: 2px solid var(--primary); background: #fef2f2; padding: 1rem;">
            <p style="font-size: 1.15rem; line-height: 1.6; color: #1e293b; font-weight: 500; margin: 0;">
                「作為全局首創的職安專責單位，我們的核心目標是建立科學化與高效率的救援體系。RIT 機制不僅是救人，更是建立一道系統性的最後保線。」
            </p>
            <p style="text-align: right; font-weight: 700; font-size: 1rem; margin-top: 0.5rem;">—— 職安科科長 廖耿輝</p>
        </div>
        <div class="quote-box" style="border-left: 5px solid #000; background: #f8fafc; padding: 1rem; margin-top: 1rem;">
            <p style="font-size: 1.1rem; margin: 0; font-weight: bold; color: #334155;">
                【學長導讀】：兄弟，這本不是拿來應付長官的 SOP。這裡面寫的每一個字，都是用別人的痛換來的。當你穿上裝備、掛上 RIT 臂章站到門口那一刻起，你就是裡頭那些兄弟能活著回家見老婆小孩的唯一指望。
            </p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">2. RIT 任務編組與資源</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">學長告訴你，RIT (快速救援小組) 是戰場上的特種部隊。我們站在門口，只有一個任務：**把裡面的自己人活著拉出來。**</p>
        <div class="card" style="margin-bottom: 1rem; border-left: 5px solid #2563eb;">
            <h4 style="color: #2563eb; margin-bottom: 0.5rem;">核心編組 (4 人，少一個都不行)</h4>
            <ul style="font-size: 1.05rem; line-height: 1.6;">
                <li><strong>帶隊官 (Officer)：</strong>你是整隊的大腦與眼睛。死盯著 TIC，負責聯絡，決定要不要硬幹還是撤退。</li>
                <li><strong>搜索員 (Searcher)：</strong>你就是那隻戴著手套在全黑地獄裡摸索的導盲犬。主繩不能離手，角落不能漏摸。</li>
                <li><strong>救援手 (Rescuer)：</strong>苦力擔當。扛著 RIT Pack 跟破壞器材，看到障礙物就砸，看到兄弟沒氣就接。</li>
                <li><strong>門禁補給 (Door/Staging)：</strong>這不是屎缺！你是我們在外面留的「活路」。顧好水線，盯死進去的時間。</li>
            </ul>
        </div>
        <div class="quote-box" style="border-left: 5px solid #f59e0b; background: #fffbe9;">
            <p style="font-size: 1rem; margin: 0;"><strong>鐵律中的鐵律：</strong>指揮官叫你去幫忙打火、拿水帶？**拒絕他！** RIT 只要一動手幹別的事，一旦傳來 MAYDAY，裡面的兄弟就等死吧。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">3. 這是你的武器庫，把它摸熟</h2>
        <div class="card" style="margin-bottom: 1rem;">
            <h4>團隊核心裝備 (Team Cache)</h4>
            <ul style="font-size: 1.05rem; line-height: 1.5;">
                <li><strong>RIT Pack (緊急供氣袋)：</strong>兄弟斷氣時的第二條命。接管、減壓閥、UAC 充電線，閉上眼睛都要會接。</li>
                <li><strong>熱顯像儀 (TIC)：</strong>濃煙裡的鷹眼。不要只顧著找發熱的人，你要看**地板有沒有快塌了**。</li>
                <li><strong>FASTboard：</strong>把死沉的、兩百多磅的全裝備消防員從泥沼裡硬拖出來的無敵載台。</li>
                <li><strong>破壞器材：</strong>鐵撬 (Halligan Bar)、平頭斧。遇到牆壁擋路，不要客氣，拆了它。</li>
                <li><strong>搜索繩包：</strong>這是牽著你們回家的風箏線。斷了這根，你們全組都會變成待救者。</li>
            </ul>
        </div>
        <img src="assets/rit_fastboard.png" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">4. 混亂中的聲音：CAN 回報</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">火場裡吵得要命。當 MAYDAY 發生的那一秒，對講機只會傳來慘叫跟雜訊。學長教你，講重點。</p>
        <div class="card" style="background: #020617; color: #fff; border-left: 6px solid #ef4444; margin-bottom: 1.5rem;">
            <h4>指揮官的決斷：清空頻道 (Clear Radio Traffic)</h4>
            <p style="font-size: 1.05rem; line-height: 1.5;">
                聽到 "MAYDAY, MAYDAY, MAYDAY"，外面所有人**閉嘴**。主頻道全面鎖住，留給受困兄弟跟 RIT。其他人有事，滾去副頻道講。
            </p>
        </div>
        <div class="card" style="border-left: 6px solid #2563eb; background: #eff6ff;">
            <h4>就算嚇到發抖，也要照著 C.A.N. 講：</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>C - 狀況 (Conditions)：</strong>「二樓東側，伸手不見五指，溫度快受不了了！」</li>
                <li><strong>A - 行動 (Actions)：</strong>「摸到學長了！已經接上 UAC 給氣，準備把他上板拉走。」</li>
                <li><strong>N - 需求 (Needs)：</strong>「後面火跟過來了！我要一條水線掩護退路，再派第二組來接手搬運！」</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">5. 不要悶著頭衝：360度偵察</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">RIT 小隊抵達現場，不要傻傻站在正門。先繞房子跑一圈，你要先知道等一下從哪裡去「偷」兄弟出來。</p>
        <div class="card" style="margin-bottom: 1rem;">
            <h4>你看的不是火，是「生路」(360 Size-Up)</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>建築骨架：</strong>鐵皮屋？木造？還是 RC？鐵皮燒紅了隨時會塌，進去拉人就是拿命賭。</li>
                <li><strong>拆除障礙 (Softening the Building)：</strong>看到側面鐵窗焊死？拿破壞剪先把它剪了！不要等裡面喊 MAYDAY 才發現無路可退。</li>
                <li><strong>察言觀「煙」：</strong>排氣口的煙黑又急？裡面快閃燃了。你現在進去就是送死。</li>
                <li><strong>斷瓦斯斷電：</strong>這不用教了吧？不要被炸飛。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">6. FASTboard：不是擔架，是拔人神器</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">學弟，全副武裝的學長吸飽水有多重你知道嗎？用手拖保證你 30 秒就沒力。這塊板子就是為了「鑽狗洞」跟「硬拉」設計的。</p>
        <table style="font-size: 1.05rem; line-height: 1.45; width: 100%; border-collapse: collapse;">
            <tr style="background: #1e293b; color: #fff;"><th style="padding: 8px;">特徵</th><th style="padding: 8px;">實戰用意</th></tr>
            <tr><td style="padding: 8px; font-weight: bold;">尺寸比擔架小</td><td style="padding: 8px;">45"×18"。因為火場裡都堆滿雜物，你要能在窄巷跟樓梯角硬拐過去。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">外部把手粗大</td><td style="padding: 8px;">讓你戴著厚重的消防手套，在全黑的狀況下一把就能死死抓牢。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Kevlar 織帶</td><td style="padding: 8px;">耐火耐割。拖過滿是碎玻璃跟鐵釘的走廊也不會斷。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">會發光的板子</td><td style="padding: 8px;">全體夜光材質。濃煙裡那點螢光綠，就是你帶學長回家的燈塔。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">前端像滑雪板</td><td style="padding: 8px;">45度上揚。拉起來直接滑過管線跟滿地的垃圾，不會卡死。</td></tr>
        </table>
        <div class="quote-box" style="margin-top: 1rem; border-left: 4px solid #b91c1c;">
            <p style="font-size: 0.95rem; margin: 0;"><strong>記住：</strong>它是利用滑門的物理優勢設計的，不要用「抬」的，用「拉」的！</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">7. 用完不收好，下次死的就是你</h2>
        <div class="card" style="margin-bottom: 1.2rem;">
            <h4>拖拉繩與連結索</h4>
            <ul style="font-size: 1.05rem; line-height: 1.5;">
                <li>拖曳繩有 24 呎，上面打了結。為什麼打結？因為手套全是泡沫黑油時，只有這樣才抓得住！</li>
                <li>吊索：紅色對胸口，藍色對大腿。不要接反了把人勒死。</li>
            </ul>
        </div>
        <h4 style="color: #b91c1c; margin-bottom: 0.8rem;">Ready-State：拔出來就要能用</h4>
        <div style="font-size: 1.1rem; line-height: 1.6;">
            <p>1. <strong>理線：</strong>把繩子平順地塞回開口，不要亂塞一通，下次卡住拉不出來會出人命的。</p>
            <p>2. <strong>三角環 (Tri-link) 歸位：</strong>把它躺平塞回保護槽裡。</p>
            <p>3. <strong>咬死魔鬼氈：</strong>金屬扣環全部用魔鬼氈黏死！在埋伏推進時，金屬撞擊聲會蓋掉微弱的求救聲。</p>
        </div>
        <div class="quote-box" style="margin-top: 1.5rem; background: #fffbe9; border-left: 5px solid #f59e0b;">
            <p style="font-size: 1rem; margin: 0;"><strong>學長語錄：</strong>如果我倒在裡面，因為你繩子捲得亂七八糟解不開而沒救到我，我做鬼都不會放過你。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">8. 單兵爆發打包術 (肌肉記憶)</h2>
        <p style="font-size: 1.1rem;">聽著，濃煙裡你什麼都看不見，更沒時間讓你慢慢喬姿勢。靠你的雙手去「摸」出來。</p>
        <div class="card" style="border-left-color: #2563eb;">
            <h4>單人極速翻捲 (The Sweep)</h4>
            <ol style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>高放法：</strong>板子先丟在他頭旁邊，故意放高一點。因為等一下往下扯有重力加持。</li>
                <li><strong>巧勁翻身：</strong>不要硬翻。把他當成一個大不倒翁，以他背後的氣瓶當作「支點」，借力一推，人就滾上去了。</li>
                <li><strong>手臂藏好 (Packaging Arms)：</strong>手一定要「折進去」板子裡。如果在拖拉的時候他的手卡在門框上，會當場被扯斷。</li>
            </ol>
        </div>
        <h4 style="margin-top: 1.5rem;">綁緊，死命地綁緊</h4>
        <p style="font-size: 1.1rem; line-height: 1.5;">
            ● 綁帶 (Lashing) 必須在胸口變成一個 <strong>大叉叉 (X)</strong>。<br>
            ● 只准勾在板子中間那條最大的 <strong>三角環 (Tri-link)</strong> 上。別勾錯地方，拉扯力道一來會整個崩開。
        </p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">9. 把人「拔」出地獄的技術</h2>
        <h4 style="color: #b91c1c;">垂直吊升的「隱形殺手」：勿擠壓胸腔</h4>
        <div class="card" style="font-size: 1.1rem;">
            <p><strong>繞繩死鎖 (Handle Wrap)：</strong>當你要從洞口把他直直往上拉時，主繩<strong style="color: #b91c1c;">必須先繞過板子頂端把手一圈</strong>，再來扣住他。如果不繞這一圈，繩子拉緊的瞬間，龐大的壓力會直接把他肋骨壓斷。</p>
        </div>
        <h4 style="margin-top: 1.5rem;">在窗台卡住怎麼辦？(Pike and Pivot)</h4>
        <p style="font-size: 1.1rem; line-height: 1.6;">好不容易把他拉到窗邊，人卻直立立卡在窗框外？</p>
        <ol style="font-size: 1.1rem; line-height: 1.6;">
            <li><strong>穩住：</strong>先停！繩子鎖死，這時候掉下去就全毀了。</li>
            <li><strong>換檔：</strong>把施力點轉移下半部的藍色繩帶。拉力線往下放。</li>
            <li><strong>翹翻轉身 (Pivot)：</strong>像翹翹板一樣，從他腳底往上一頂、腰部一推，把他橫向「轉」進窗戶裡。</li>
        </ol>
    </div>`,

    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">10. 盲搜保命符：搜索繩與熱顯像 (TIC)</h2>
        <h4>Cruant Autoroll V6 Max 搜索繩</h4>
        <p style="font-size: 1.1rem;">在漫天濃煙中走丟，等於宣判死刑。</p>
        <ul style="font-size: 1.1rem; line-height: 1.6;">
            <li><strong>自動伸縮 (AutoRoll)：</strong>它給了你 6 公尺的搜救彈性，但平常鎖在 1.3 公尺。不要讓繩子在地上拖，會絆死自己人。</li>
            <li><strong>絕對鎖死：</strong>把繩子末端的 D 環**扣死在帶隊官的腰帶上**。只要還活著，就不能脫隊。</li>
        </ul>
        <h4 style="margin-top: 1rem;">TIC 「三點立體掃描法」</h4>
        <div class="card" style="font-size: 1.05rem; margin-bottom: 1rem; border-left: 5px solid #b91c1c;">
            <strong>1. 掃天花板：</strong>找火源流動方向，看看上面的熱層有多厚，是不是快閃燃了。<br>
            <strong>2. 掃中性帶跟窗戶：</strong>判斷最近的逃生出口在哪裡。<br>
            <strong>3. 掃地板：</strong>最重要的一點！除了找倒下的兄弟，你要看**地板有沒有快燒穿了**。一腳踩空，神仙也難救。
        </div>
        <img src="assets/rit_tic_search.png" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">11. TIC空間搜索決策卡</h2>
        <div class="mermaid" id="m1">
            graph TD
                A[啟動 TIC 空間掃描] --> B{能見度剩多少?}
                B -->|伸手不見五指| C[切換超高感度模式]
                C --> E[用身體去撞，用手去摸]
                E --> F{摸到氣瓶或大腿?}
                F -->|是| G[雷射游標打下去標記]
                G --> I[無線電大喊 CAN 回報]
                I --> K[死守位置等擔架班]
                classDef danger fill:#f88,stroke:#f00,stroke-width:2px,color:#fff;
                class G,I,K danger;
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">12. FASTboard 救援決策卡</h2>
        <div class="mermaid" id="m2">
            graph TD
                A2["接觸到學長了！"] --> B2{"第一眼姿勢?"}
                B2 -->|"趴在地上"| C2["借力翻面 (The Sweep)"]
                B2 -->|"躺在地上"| D2["從頭部拿板子套進去"]
                C2 --> E2["把他雙手凹進板子裡"]
                D2 --> E2
                E2 --> F2["胸前打大叉叉 (Lashing 鎖死)"]
                F2 --> G2{"你要從哪裡拉?"}
                G2 -->|"走馬路/樓梯"| H2["扣中間大三角環"]
                G2 -->|"釣魚/窗口直放"| I2["主繩先繞把手一圈 (Handle Wrap)"]
                I2 --> J2["扣在藍色大腿索上"]
                H2 --> K2["像拖雪橇一樣拉出去"]
                J2 --> K2
                classDef focus fill:#f96,stroke:#f60,stroke-width:2px;
                class C2,E2,I2 focus;
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">13. 退路不能斷：定向搜索 (Oriented Search)</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">這招是為了防止你們「全組一起死在裡面」。必須有一個人當你們的活體路標。</p>
        <div class="card" style="background: #020617; color: #fff; padding: 1.2rem;">
            <ul style="line-height: 1.8; font-size: 1.05rem;">
                <li><strong>領航總機 (Oriented Member)：</strong>你給我死死守在門口或是主搜索繩上！裡面再淒厲都不能離開，你是他們最後的退路標記。</li>
                <li><strong>盲區搜索手 (Searcher)：</strong>以老大哥為圓心，深入漆黑的房間裡摸索。摸完一通，順著他的聲音回到這條活路上。</li>
                <li><strong>水帶導航訣竅：</strong>順滑接突起，通向消防車 (Smooth Bump to the Pump)。摸到公母接頭時，順的那邊就是門口。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">14. 卡死在走廊盡頭？Denver Drill</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">想像一下，學長裝備全開，卡死在長度不到 1 公尺的走廊盡頭，窗台又很高。這時平拉已經無效，你只能用「硬生生拔出來」的。</p>
        <div class="card" style="border-left: 5px solid #2563eb;">
            <h4>兩人發力訣竅</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>內部推進者 (Lifter)：</strong>擠到他兩腿中間半蹲，用你的肩膀死命頂住他的背，像火箭一樣往上發力。</li>
                <li><strong>窗外接應者 (Puller)：</strong>跨坐窗框，抓死他的 SCBA 肩帶，順著Lifter的推力把他硬拖上來。</li>
            </ul>
        </div>
        <p style="font-size: 1rem; color: #b91c1c; font-weight: bold; margin-top: 1rem;">致命關鍵：一定要把他上半身往前「對摺」(Jackknife)。如果不對折，他的氧氣瓶會卡死在窗台下緣，就算把脊椎扯斷也拉不出來。</p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">15. 墜落樓板破洞：Nance Drill</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">這招專門對付學長踩空掉進洞裡的情境。洞口太小只能下去一條繩子，這時就是考驗滑輪物理學的時候了。</p>
        <div class="card">
            <h4>把水帶變滑輪</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>死鎖手臂：</strong>用雙套結 (Handcuff Knot) 套進他的雙手臂直到腋下，拉緊。不然拉到一半手骨折人就掉回去了。</li>
                <li><strong>水帶轉軸：</strong>在水泥破洞邊緣墊上一條充水的硬水帶。把摩擦力降到最低，不然你們三個人在上面也拉不動 100 多公斤的死重。</li>
                <li><strong>直線平拖：</strong>上面的人退到 3 公尺外安全區，轉身，用腿部力量直線硬拉。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">16. 他沒氣了！極秒 UAC 與 EBSS 操作</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">他沒氣了，你只有 20 秒的時間，而且還是全盲狀態。</p>
        <div class="card" style="margin-bottom: 1rem;">
            <h4>UAC (快速充電線)</h4>
            <p style="font-size: 1rem;">什麼都不管，摸他氣瓶左下角的接頭，喀一聲插進去，你的氣瓶就會把最高壓力勻給他。這是第一選擇。</p>
        </div>
        <div class="card" style="background: #eff6ff; border-left: 5px solid #2563eb;">
            <h4>EBSS (強行插喉管)</h4>
            <p style="font-size: 1rem;">如果他的面罩或減壓閥已經燒壞漏氣？拔掉他的管子，用我們 RIT Pack 的低壓雙頭管直接捅進他的面罩。等於由我們這邊直接灌氣給他。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">17. 沒錢買神裝？扁帶才是最強救命符</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">如果在狹小民宅弄不進背板，你口袋裡那條 200 塊的扁帶 (Webbing) 就是你們生存的唯一希望。</p>
        <div class="card" style="margin-bottom: 1.2rem; border-left-color: #059669;">
            <h4>胸腋絞索拖拉 (Webbing Chest Drag)</h4>
            <p style="font-size: 1rem;">把環狀扁帶穿過他的腋下、壓過肩帶。然後你整個人轉過去背對他，把扁帶繞在你肩上。像纖夫拉縴一樣，低著頭，用大腿前側的肌肉發力往死裡拖。</p>
        </div>
        <div class="card" style="border-left-color: #2563eb;">
            <h4>自己的肩帶自己用 (Shoulder Strap Drag)</h4>
            <p style="font-size: 1rem;">解開他一邊的肩帶插扣，拉出來斜扣到對角的腰部 D 環。恭喜，你做了一個超級堅固的人肉手提把。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">18. 走投無路？給我撞穿那道牆</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">前有惡火後無退路，那兩片石膏板之間的牆壁是你唯一的活門。</p>
        <div class="card" style="border-left: 5px solid #f59e0b;">
            <h4>盲鑿戰術 (Wall Breaching)</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>手感打擊：</strong>視野全是黑的，用斧頭柄去敲牆，聽到空心聲就瘋狂重擊打出一個洞。</li>
                <li><strong>戰術泳進 (Swim Through)：</strong>洞打好後，氣瓶一定會卡死。不要直直鑽！你要**歪著身子，一隻手伸直像超人，另一隻手貼緊身側**，滑過去！</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">19. 隱形捕鼠夾：天花板掉落的電線</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">學長看過太多次，火場裡的死因不是燒死，是被掉下來的輕鋼架電線「吊死」在地上。</p>
        <div class="card">
            <h4>被蜘蛛網纏住的三招自救法</h4>
            <ol style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>不准動 (Stop & Freeze)：</strong>發現被勾住，馬上定格！你越掙扎，氣瓶閥的死角會把電線卷得越緊，直接變成上吊繩。</li>
                <li><strong>退後仰泳 (Swim Backward)：</strong>慢慢倒退嚕。雙手像游仰式一樣在胸前大迴旋，試圖把線撥開。</li>
                <li><strong>剪到底 (Cut & Clear)：</strong>摸出胸口的萬用剪。不要想要理線了，只要卡在脖子或氣瓶閥周圍的東西，全部剪斷！</li>
            </ol>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">20. 命懸一線：二樓以上的梯上搬運</h2>
        <div class="card" style="background: #020617; color: #fff;">
            <h4>梯上搬運心法</h4>
            <p style="font-size: 1rem;">不要想要揹！把他抬上窗台後，讓他「面朝下」趴在梯子上。你要鑽到他下面，讓他跨坐在你的大腿跟肩膀上。你每下一格梯子，他的重量就在你身上壓一下，這樣他才不會往後翻下去。</p>
        </div>
        <div class="card" style="border-left: 5px solid #2563eb; margin-top: 1rem;">
            <h4>沒時間了？跳樓滑降 (Window Bailout)</h4>
            <p style="font-size: 1rem;">聽到頭頂開始發出火車要衝出來的轟鳴聲？閃燃要來了！雙手抓死窗框，把自己「盪」到水箱車的雙節梯外側立柱 (Rails) 上。雙手雙腳夾緊梯柱，像大溜滑梯一樣給我滑到底！</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">21. 最強的盾牌：掩護水線</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">RIT 進去拉人，後面一定要跟著一條 2.5 吋的重裝水線。</p>
        <div class="card">
            <h4>水線防禦部署 (Protective Line)</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li>你的任務是保住 RIT 的退路。</li>
                <li>這條水線是拿來**打煙跟阻擋火線**的，不是拿來滅火的。</li>
                <li><strong style="color: #b91c1c;">兄弟聽好，絕對嚴禁轉身去滅火！</strong>你跑去打火，火燒斷了退路，裡面的 RIT 跟待救者就一起陪葬。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">22. 沒氣就是死：耗氧監護與毒物除汙</h2>
        <div class="card" style="margin-bottom: 1.5rem;">
            <h4>你的氣瓶沒有想像中耐用</h4>
            <p style="font-size: 1.1rem;">在 RIT 的極限高耗能下，肺部擴張，一分鐘可以吸掉 100 公升的空氣。300Bar 的氣瓶不用 15 分鐘就會吸乾。你必須有意識地控制呼吸節奏。</p>
        </div>
        <h4>滿身毒血：現場深層除汙 (On-scene Decon)</h4>
        <p style="font-size: 1.1rem;">把兄弟拉出來後，還沒結束。你的消防衣現在沾滿了比火還毒的致癌物。任務一結束，立刻去外面的除汙站用洗劑刷洗全身，不要把別人的命救回來，卻把自己的命賠給癌症。</p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">23. 生死紅線：1/3 氣量規則</h2>
        <p style="font-size: 1.1rem;">不要逞英雄！大家都想把火打完、把人拉出來再走，這就是殉職的最大主因。</p>
        <div class="card" style="border-left-color: #f59e0b;">
            <h4>這是鐵律，沒有例外：</h4>
            <ul style="font-size: 1rem; line-height: 1.8;">
                <li><strong>耗掉 1/3：</strong>你只能用這 1/3 的氣量進去找人。</li>
                <li><strong>耗掉下一個 1/3：</strong>這是你把他包裝好、拖出來的回程車票。</li>
                <li><strong>最後的 1/3：</strong>絕對不准碰！這是留給你們中途走錯路、遇到樓板塌陷時的保命氧氣。</li>
            </ul>
        </div>
        <h4 style="color: #b91c1c; margin-top: 1.5rem;">NUC (Never Under Center)</h4>
        <p style="font-size: 1.1rem;">只要氣量掉到一半，**不管你現在人在哪，不准再往前走一步，立刻掉頭撤退！**這是對你自己，也是對你隊友生命的底線尊重。</p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">24. 濃煙裡的暗號：三個救命縮寫</h2>
        <div class="card" style="margin-bottom: 1rem; border-left: 6px solid #b91c1c; background: #fff1f2;">
            <strong style="color: #b91c1c;">L.U.N.A.R. 宣告：</strong><br>
            你掛點的時候喊的。我在哪裡(L)/什麼編制(U)/我叫什麼(N)/氣量剩多少(A)/我要什麼支援(R)。
        </div>
        <div class="card" style="margin-bottom: 1rem; border-left: 6px solid #2563eb; background: #eff6ff;">
            <strong style="color: #2563eb;">V.V.C.D. 讀煙術：</strong><br>
            看煙的體積/速度/顏色/密度。學長教你最簡單的一眼判斷：**煙跑得跟噴射機一樣快，而且顏色黑得發亮？跑！三秒內保證閃燃！**
        </div>
        <div class="card" style="margin-bottom: 1rem; border-left: 6px solid #059669; background: #ecfdf5;">
            <strong style="color: #059669;">M.E.D.I.C. 指揮官調控：</strong><br>
            外面長官的SOP（監測/評估/決策/執行/通訊）。
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">25. 接觸目標後的 A.W.A.R.E. 優先序</h2>
        <div class="mermaid" id="m3">
            graph TD
                A[摸到學長了！] --> B(Air: 給他空氣！沒這個一切免談)
                B --> C(Water: 叫外面的水線打過來掩護)
                C --> D(A Radio: 幫他把頻道轉到RIT專用台)
                D --> E(Radio: 對大台喊我們找到人了)
                E --> F(Extrication: 綁緊，硬拖出地獄)
                style B fill:#fee,stroke:#f44
                style C fill:#def,stroke:#38f
                style F fill:#dfd,stroke:#2c5
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">26. 絕境破繭：你只有你自己</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">當你被重物壓住或是卡在鋼架裡，連 MAYDAY 都喊不出來的時候。</p>
        <div class="card">
            <h4>Swim Through (泳進戰術)</h4>
            <p style="font-size: 1rem;">手不要往前伸！把雙手像游蛙式一樣，從氣瓶後面**往後**去把周圍的垃圾跟鋼架撥開。壓低重心，像蛇一樣鑽過去。</p>
        </div>
        <div class="card" style="margin-top: 1.5rem; border-left-color: #059669;">
            <h4>SCBA 半脫卸硬鑽</h4>
            <p style="font-size: 1rem;">如果你背著氣瓶實在過不去？鬆開一邊的肩帶，把氣瓶從後背轉到肚子下面，抱著它鑽出去。**死命記住：不管多卡，打死不准拔面罩，也不准扯掉肺閥！**拔了就是吸毒氣。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">27. 摩天樓地獄：高樓層 RIT</h4>
        <p style="font-size: 1.1rem; line-height: 1.6;">爬 15 樓上去救人？等你爬到，你也心肌梗塞了。這時時間就是血。</p>
        <div class="card">
            <h4>Forward Staging (前進蹲點)</h4>
            <p style="font-size: 1rem;">不要傻傻在 1 樓等。RIT 整組給我推到起火層的**「正下方 1 到 2 層」**待命！只要槍聲一響（MAYDAY），你推開安全門就能馬上衝進去。</p>
        </div>
        <div class="card" style="background: #fff1f2; margin-top: 1.5rem; border-left-color: #ef4444;">
            <p style="font-size: 1rem; color: #b91c1c; font-weight: bold;">絕對禁令：</p>
            <p style="font-size: 1rem;">**嚴禁搭乘未經消防特管控制的電梯。**如果電梯門一開，外面是 800 度的火海，這台電梯就是你們整組的鐵棺材。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">28. 黑暗心智：恐慌是會傳染的毒藥</h2>
        <p style="font-size: 1.1rem;">在全黑又燙的鐵皮屋裡迷路，第一秒一定會想大叫。學長知道，因為我都懂。但放任恐慌，你的氧氣會在兩分鐘內吸乾。</p>
        <div class="card" style="border-left: 5px solid #8b5cf6;">
            <h4>Box Breathing (方塊呼吸法)</h4>
            <p style="font-size: 1rem;">停下所有動作。閉上眼睛（反正也看不到）。**吸氣 4 秒、憋氣 4 秒、吐氣 4 秒、憋氣 4 秒**。這個公式能強迫你的大腦關閉「逃亡警報」，讓你的手不再發抖，讓你重新思考出路。</p>
        </div>
        <div class="quote-box" style="background: #020617; color: #fff;">
            <p style="font-size: 1rem;"><strong>「火場不會馬上殺死你，但你失控的腦袋會。」</strong></p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">29. 為什麼教官要搞蒙眼特訓？</h2>
        <p style="font-size: 1.1rem;">平時你覺得矇眼接氣瓶很蠢？因為真正的火場就是長這樣。地理環境完全消失，能救你的只有肌肉反射。</p>
        <div class="card">
            <h4>Blacked-out Mask (全黑蒙眼特訓)</h4>
            <ul style="font-size: 1rem;">
                <li><strong>60 秒極限</strong>：不管你是要把人翻上 FASTboard，還是接上 UAC，矇住眼睛，60 秒內沒搞定，人就沒了。</li>
                <li>觸覺 3D 建圖：摸他的肩膀、摸管線的走向、摸牆壁的溫度。用手在腦海裡畫出地圖，不是用眼睛。</li>
            </ul>
        </div>
        <p style="font-size: 1.15rem; font-weight: bold; text-align: center; color: #059669; padding: 1rem; border: 2px dashed #059669; margin-top: 1rem;">
            在操場多流汗，火場就不會流血，更不會留魂。
        </p>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2.2rem; color: #b91c1c;">30. 結語：這是我們對彼此的承諾</h2>
        <p style="font-size: 1.2rem; margin-top: 1.5rem;">
            RIT 從來都不是拿來展示那些幾十萬裝備的秀場。
            <br><br>
            當你掛上 RIT 臂章的那一刻，你就簽下了生死狀。我們是這個火場裡，最晚離開的一批人。
        </p>
        <div class="quote-box" style="background: #020617; color: #fff; width: 100%; padding: 2rem;">
            <p style="font-size: 1.4rem; font-weight: 900; margin: 0;">「我發誓，如果有一天你在裡頭跌倒了，我絕對親手把你拖出大門。」</p>
        </div>
        <p style="text-align: center; font-weight: 700; margin-top: 2rem;">新竹縣政府消防局 職安科 敬製</p>
    </div>`,
    `<div class="page cover" style="padding: 0; background: #020617; display: flex; align-items: center; justify-content: center;">
        <div style="text-align: center; color: #fff;">
            <div style="width: 80px; height: 8px; background: var(--primary); margin: 0 auto 2rem;"></div>
            <h3 style="font-size: 2rem; font-weight: 900; letter-spacing: 4px;">安全歸隊<br>這是我們唯一的歸途</h3>
            <p style="color: #94a3b8; font-size: 1.1rem; letter-spacing: 2px;">HSCHB Tactical v2.0</p>
        </div>
    </div>`
];

const TOTAL_PAGES = ISO_CONTENT.length;

const ISO_APP = {
    flipBook: null,
    isMobile: false,
    isFlipping: false,
    audioCtx: null,
    audioUnlocked: false,
    selectors: {
        book: '#book',
        pageInfo: '#pageInfo',
        navItems: '.nav-item',
        prevBtn: '#prevBtn',
        nextBtn: '#nextBtn',
        menuToggle: '#menuToggle',
        closeSidebar: '#closeSidebar',
        appContainer: '.app-container'
    },

    init() {
        this.isMobile = window.innerWidth <= 768;
        this.initAudioContext();
        this.initLightbox();
        if (window.mermaid) {
            window.mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose' });
        }
        this.addSidebarOverlay();
        this.renderContent();
        this.initEngine();
        this.bindEvents();
        this.initMermaid();
        this.updatePageInfo(0);
    },

    addSidebarOverlay() {
        const container = document.querySelector(this.selectors.appContainer);
        if (!container) return;
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.addEventListener('click', () => container.classList.remove('sidebar-open'));
        container.appendChild(overlay);
    },

    renderContent() {
        const container = document.querySelector(this.selectors.book);
        if (!container) return;
        ISO_CONTENT.forEach(html => container.insertAdjacentHTML('beforeend', html));
    },

    initAudioContext() {
        // 監聽第一次互動以解鎖 AudioContext (行動端與本地桌機策略)
        const unlock = (e) => {
            if (this.audioUnlocked) return;

            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }

            // 徹底解鎖：播放一個極短的靜音 Buffer
            const buffer = this.audioCtx.createBuffer(1, 1, 22050);
            const source = this.audioCtx.createBufferSource();
            source.buffer = buffer;
            source.connect(this.audioCtx.destination);
            source.start(0);

            this.audioUnlocked = true;

            // 點擊導航按鈕時，讓解鎖後的第一次發聲也能成功
            if (e.target.closest('#nextBtn, #prevBtn, .nav-item')) {
                const type = e.target.closest('.nav-item') ? 'click' : (e.target.closest('.nav-btn') ? 'click' : '');
                if (type) this.playSynth(type);
            }

            document.removeEventListener('touchstart', unlock, true);
            document.removeEventListener('mousedown', unlock, true);
        };
        // 使用 capture 階段確保在按鈕自身的 listener 之前執行
        document.addEventListener('touchstart', unlock, true);
        document.addEventListener('mousedown', unlock, true);
    },

    initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const content = document.getElementById('lightbox-content');
        const caption = document.getElementById('lightbox-caption');
        const closeBtn = document.querySelector('.lightbox-close');

        if (!lightbox) return;

        const closeLightbox = () => {
            lightbox.style.display = 'none';
            content.innerHTML = '';
            caption.innerHTML = '';
        };

        closeBtn.onclick = closeLightbox;
        lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

        // 監聽圖片點擊
        document.addEventListener('click', (e) => {
            const img = e.target.closest('.page img');
            if (img && !img.closest('.lightbox-content')) {
                lightbox.style.display = 'flex';
                const clone = img.cloneNode();
                content.innerHTML = '';
                content.appendChild(clone);
                caption.textContent = img.alt || '圖片預覽';
                this.playSynth('click');
            }

            // 監聽 Mermaid 圖表點擊
            const mermaidChart = e.target.closest('.mermaid');
            if (mermaidChart && !mermaidChart.closest('.lightbox-content')) {
                lightbox.style.display = 'flex';
                const svg = mermaidChart.querySelector('svg');
                if (svg) {
                    const clone = svg.cloneNode(true);
                    clone.classList.add('mermaid-clone');
                    clone.style.maxWidth = '100%';
                    clone.style.height = 'auto';
                    content.innerHTML = '';
                    content.appendChild(clone);
                    caption.textContent = '圖表放大預覽';
                    this.playSynth('click');
                }
            }
        });

        // 為所有圖片動態加上放大鏡圖示
        this.updateZoomIcons();
    },

    updateZoomIcons() {
        // 定期檢查並為圖片加上容器與圖示 (針對翻頁後新產生的內容)
        document.querySelectorAll('.page img:not(.zoomed)').forEach(img => {
            if (img.closest('.lightbox-content')) return;
            img.classList.add('zoomed');
            const wrapper = document.createElement('div');
            wrapper.className = 'img-container';
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            wrapper.insertAdjacentHTML('beforeend', '<div class="zoom-icon"><i class="fas fa-search-plus"></i></div>');
        });
    },

    playSynth(type) {
        if (!this.audioUnlocked || !this.audioCtx) return;

        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        const now = this.audioCtx.currentTime;

        if (type === 'click') {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'flip') {
            // 模擬紙張翻動的寬頻帶雜音
            const bufferSize = this.audioCtx.sampleRate * 0.3;
            const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            const noise = this.audioCtx.createBufferSource();
            noise.buffer = buffer;
            const filter = this.audioCtx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(3000, now);
            filter.frequency.exponentialRampToValueAtTime(500, now + 0.3);
            const gain = this.audioCtx.createGain();
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.audioCtx.destination);
            noise.start(now);
            noise.stop(now + 0.3);
        }
    },

    initEngine() {
        const element = document.querySelector(this.selectors.book);
        const vw = document.getElementById('book-container').clientWidth;
        const vh = document.getElementById('book-container').clientHeight;

        const config = this.isMobile
            ? {
                width: vw,
                height: vh,
                size: "fixed",
                showCover: false,
                useMouseEvents: false,
                disableFlipByClick: true,
                flippingTime: 400,
                maxShadowOpacity: 0.15,
                usePortrait: true,
                mobileScrollSupport: false
            }
            : {
                width: 650,
                height: 950,
                size: "stretch",
                showCover: true,
                useMouseEvents: false,
                disableFlipByClick: true,
                flippingTime: 800
            };

        this.flipBook = new St.PageFlip(element, config);
        this.flipBook.loadFromHTML(document.querySelectorAll('.page'));
    },

    updatePageInfo(pageIndex) {
        const pageInfo = document.querySelector(this.selectors.pageInfo);
        const progressFill = document.getElementById('progress-fill');
        if (pageInfo) pageInfo.textContent = `${pageIndex + 1} / ${TOTAL_PAGES}`;
        if (progressFill) {
            const progress = ((pageIndex + 1) / TOTAL_PAGES) * 100;
            progressFill.style.width = `${progress}%`;
        }
    },

    initMermaid() {
        if (!window.mermaid) return;
        const targets = document.querySelectorAll('.mermaid:not([data-processed="true"])');
        setTimeout(() => {
            targets.forEach((el, i) => {
                const rect = el.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) return;
                if (!el.id) el.id = 'mermaid-' + Date.now() + '-' + i;
                try { window.mermaid.init(undefined, [el]); } catch (e) { /* skip */ }
                el.setAttribute('data-processed', 'true');
            });
        }, 850);
    },

    bindEvents() {
        const navItems = document.querySelectorAll(this.selectors.navItems);

        this.flipBook.on('flip', (e) => {
            this.updatePageInfo(e.data);
            navItems.forEach(nav => nav.classList.toggle('active', parseInt(nav.dataset.page) === e.data));
            this.initMermaid();
            this.updateZoomIcons();
            this.playSynth('flip');
            this.isFlipping = true;
            setTimeout(() => { this.isFlipping = false; }, this.isMobile ? 450 : 850);
        });

        const safeFlip = (dir) => {
            if (this.isFlipping) return;
            this.playSynth('click');

            const currentState = this.flipBook.getState();
            if (currentState === 'flipping' || currentState === 'user_fold') return;

            const currentPage = this.flipBook.getCurrentPageIndex();

            if (this.isMobile) {
                if (dir === 'prev' && currentPage > 0) {
                    this.isFlipping = true;
                    this.flipBook.turnToPrevPage();
                    this.updatePageInfo(currentPage - 1);
                    this.initMermaid();
                    setTimeout(() => { this.isFlipping = false; }, 150);
                } else if (dir === 'next' && currentPage < TOTAL_PAGES - 1) {
                    this.isFlipping = true;
                    this.flipBook.turnToNextPage();
                    this.updatePageInfo(currentPage + 1);
                    this.initMermaid();
                    setTimeout(() => { this.isFlipping = false; }, 150);
                }
            } else {
                dir === 'next' ? this.flipBook.flipNext() : this.flipBook.flipPrev();
            }
        };

        const prevBtn = document.querySelector(this.selectors.prevBtn);
        const nextBtn = document.querySelector(this.selectors.nextBtn);

        let touchFired = false;
        const addBtnEvents = (btn, dir) => {
            btn.addEventListener('touchstart', (e) => { e.preventDefault(); }, { passive: false });
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                touchFired = true;
                safeFlip(dir);
                setTimeout(() => { touchFired = false; }, 300);
            }, { passive: false });
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!touchFired) safeFlip(dir);
            });
        };
        addBtnEvents(prevBtn, 'prev');
        addBtnEvents(nextBtn, 'next');

        navItems.forEach(nav => {
            nav.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.isFlipping || this.flipBook.getState() === 'flipping') return;
                this.playSynth('click');

                const targetPage = parseInt(nav.dataset.page);
                if (isNaN(targetPage)) return;

                const currentPage = this.flipBook.getCurrentPageIndex();

                if (this.isMobile && targetPage < currentPage) {
                    this.isFlipping = true;
                    this.flipBook.turnToPage(targetPage);
                    this.updatePageInfo(targetPage);
                    navItems.forEach(n => n.classList.toggle('active', parseInt(n.dataset.page) === targetPage));
                    this.initMermaid();
                    setTimeout(() => { this.isFlipping = false; }, 150);
                } else {
                    this.flipBook.flip(targetPage);
                }

                if (this.isMobile) {
                    setTimeout(() => document.querySelector(this.selectors.appContainer).classList.remove('sidebar-open'), 350);
                }
            });
        });

        document.querySelector(this.selectors.menuToggle).onclick = () => document.querySelector(this.selectors.appContainer).classList.add('sidebar-open');
        document.querySelector(this.selectors.closeSidebar).onclick = () => document.querySelector(this.selectors.appContainer).classList.remove('sidebar-open');

        if (this.isMobile) this.initGestureControl();

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const wasMobile = this.isMobile;
                this.isMobile = window.innerWidth <= 768;
                if (wasMobile !== this.isMobile) location.reload();
            }, 300);
        });
    },

    initGestureControl() {
        let startX = 0, startY = 0, startTime = 0, isSwiping = false;
        const target = document.getElementById('book-container');
        document.body.style.overscrollBehaviorX = 'none';

        target.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
            isSwiping = false;
        }, { passive: true });

        target.addEventListener('touchmove', (e) => {
            if (e.touches.length > 1) return;

            const dx = Math.abs(e.touches[0].clientX - startX);
            const dy = Math.abs(e.touches[0].clientY - startY);

            // 只要水平滑動大於垂直，且超過 15px，就接管為翻頁手勢 (無位置限制)
            if (dx > dy * 1.2 && dx > 15) {
                isSwiping = true;
                if (e.cancelable) e.preventDefault();
            } else if (dy > dx) {
                isSwiping = false;
            }
        }, { passive: false });

        target.addEventListener('touchend', (e) => {
            // 避開按鈕與選單區塊
            if (document.elementFromPoint(startX, startY)?.closest('.nav-btn, .sidebar, .menu-toggle, .sidebar-overlay')) return;

            if (Date.now() - startTime > 600) return; // 觸控超過 600ms 視為長按閱讀
            if (!isSwiping) return;

            const dx = e.changedTouches[0].clientX - startX;

            if (Math.abs(dx) > 40) { // 滑動距離超過 40px 即觸發
                if (this.isFlipping) return;

                if (this.isMobile) {
                    const currentPage = this.flipBook.getCurrentPageIndex();
                    if (dx > 0 && currentPage > 0) {
                        // 往右滑，回上一頁 (採用與導航列相同的絕對頁碼防護)
                        this.isFlipping = true;
                        this.flipBook.turnToPrevPage();
                        this.updatePageInfo(currentPage - 1);
                        document.querySelectorAll(this.selectors.navItems).forEach(n => n.classList.toggle('active', parseInt(n.dataset.page) === currentPage - 1));
                        this.initMermaid();
                        setTimeout(() => { this.isFlipping = false; }, 150);
                    } else if (dx < 0 && currentPage < TOTAL_PAGES - 1) {
                        // 往左滑，去下一頁
                        this.isFlipping = true;
                        this.flipBook.turnToNextPage();
                        this.updatePageInfo(currentPage + 1);
                        document.querySelectorAll(this.selectors.navItems).forEach(n => n.classList.toggle('active', parseInt(n.dataset.page) === currentPage + 1));
                        this.initMermaid();
                        setTimeout(() => { this.isFlipping = false; }, 150);
                    }
                } else {
                    dx > 0 ? this.flipBook.flipPrev() : this.flipBook.flipNext();
                }
            }
            isSwiping = false;
        }, { passive: true });
    }
};

window.onload = () => ISO_APP.init();