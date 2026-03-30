"use strict";

const ISO_CONTENT = [
    `<div class="page cover" style="padding: 0; background: #020617;">
        <div style="height: 100%; width: 100%; position: relative; overflow: hidden;">
            <img src="assets/rit_cover.png" style="width: 100%; height: 65%; object-fit: cover;">
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 45%;
                        background: linear-gradient(transparent, #020617 80%); padding: 2rem 3.5rem;
                        display: flex; flex-direction: column; justify-content: flex-end;">
                <h1 style="font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 900; line-height: 1.1; color: #fff; text-shadow: 0 4px 20px rgba(0,0,0,0.8); margin-bottom: 0.5rem;">RIT 救助技術<br>實戰指引 v2.0</h1>
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
                「作為全局首創的職安專責單位，我們的核心目標 establish 了科學化與高效率的救援體系。RIT 機制不僅是救人，更是建立一道系統性的最後保線。」
            </p>
            <p style="text-align: right; font-weight: 700; font-size: 1rem; margin-top: 0.5rem;">—— 職安科科長 廖耿輝</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">2. RIT 任務編組與資源</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">RIT (快速救援小組) 是一支專職待命、裝備齊全的戰術預備分隊。唯一的任務是營救受困之消防人員。</p>
        <div class="card" style="margin-bottom: 1rem; border-left: 5px solid #2563eb;">
            <h4 style="color: #2563eb; margin-bottom: 0.5rem;">核心編組 (4 人制標準)</h4>
            <ul style="font-size: 1.05rem; line-height: 1.6;">
                <li><strong>帶隊官 (Officer)：</strong>持熱顯像儀 (TIC) 領航，負責對外通訊與小組戰術決策。</li>
                <li><strong>搜索員 (Searcher)：</strong>配置主搜索繩與強光手電筒，執行定向搜索與物理探索。</li>
                <li><strong>救援手 (Rescuer)：</strong>攜帶破壞器材與緊急供氣裝備 (RIT Pack)，負責處理障礙物與氣瓶連接。</li>
                <li><strong>門禁/外部補給 (Door/Staging)：</strong>監控外部環境與氣量時序，佈署備用水線與備用裝備。</li>
            </ul>
        </div>
        <div class="quote-box" style="border-left: 5px solid #f59e0b; background: #fffbe9;">
            <p style="font-size: 1rem; margin: 0;"><strong>戰術原則：</strong>RIT 在待機時絕對禁止被指派其他主戰鬥任務 (如滅火或一般尋人)，以保證任務單純化與立即出動能力。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">3. RIT 專屬裝備與整備</h2>
        <div class="card" style="margin-bottom: 1rem;">
            <h4>團隊核心裝備 (Team Cache)</h4>
            <ul style="font-size: 1.05rem; line-height: 1.5;">
                <li><strong>RIT Pack (緊急供氣袋)：</strong>含備用氣瓶、減壓閥、UAC 充氣線及 EBSS 雙頭管。</li>
                <li><strong>熱顯像儀 (TIC)：</strong>專注於環境溫度結構分析與人體目標。</li>
                <li><strong>FASTboard：</strong>快速救援撤出載台 (含專用拖拉系統與吊掛繩段)。</li>
                <li><strong>破壞器材：</strong>鐵撬 (Halligan Bar)、平頭斧、斷線鉗、多功能軍刀鋸。</li>
                <li><strong>搜索繩包 (Search Rope)：</strong>確保原路撤出，絕對防丟失。</li>
            </ul>
        </div>
        <img src="assets/rit_fastboard.png" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">4. 無線電通訊與 CAN 回報</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">混亂與高分貝噪音下的唯一求生聯絡線，必須精準、簡短、有效率。</p>
        <div class="card" style="background: #020617; color: #fff; border-left: 6px solid #ef4444; margin-bottom: 1.5rem;">
            <h4>無線電清空管制 (Clear Radio Traffic)</h4>
            <p style="font-size: 1.05rem; line-height: 1.5;">
                當喊出 "MAYDAY, MAYDAY, MAYDAY"時，指揮官應下令清空該主頻道。非相關救災人員需立即緘默，或將通訊轉移至備用 Tactical 頻道，將主頻道全時保留給受困者與 RIT。
            </p>
        </div>
        <div class="card" style="border-left: 6px solid #2563eb; background: #eff6ff;">
            <h4>C.A.N. 結構化通訊回報</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>C - Conditions (現況)：</strong>「位於二樓東側梯間，現場零能見度，高溫快速蓄積中。」</li>
                <li><strong>A - Actions (行動)：</strong>「已接觸受困學長，正在為其連接 UAC 系統供氣並準備搬運。」</li>
                <li><strong>N - Needs (需求)：</strong>「需要二號梯佈署備用水線掩護退路，並請求第二組 RIT 支援搬運。」</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">5. 建築物 360 度偵察</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">RIT 抵達現場並建立集結區 (Staging Area) 後，首要動作是主動性偵察 (Proactive Recon)。</p>
        <div class="card" style="margin-bottom: 1rem;">
            <h4>偵察焦點 (360 Size-Up)</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>建築結構與建材：</strong>判定木造、鐵皮或RC，預測屋頂與樓板坍塌時序。</li>
                <li><strong>進入點與撤出點：</strong>識別所有門窗位置。主動強制移除防盜鐵窗 (Softening the Building)，為作戰同仁預留多個逃生開口。</li>
                <li><strong>火流與濃煙：</strong>觀察排煙口 (Exhaust) 與進氣口 (Intake) 狀態，預判內部作戰組目前可能的受困區與惡化方向。</li>
                <li><strong>高危險設施：</strong>鎖定並確認關閉瓦斯主管線、電源總開關、高壓機房。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">6. FASTboard：移動救援平台</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">FASTboard 針對極限環境開發，設計邏輯圍繞「狹小空間效率」與「患者安全保護」。</p>
        <table style="font-size: 1.05rem; line-height: 1.45; width: 100%; border-collapse: collapse;">
            <tr style="background: #1e293b; color: #fff;"><th style="padding: 8px;">特徵</th><th style="padding: 8px;">規格與設計邏輯</th></tr>
            <tr><td style="padding: 8px; font-weight: bold;">尺寸量體</td><td style="padding: 8px;">45"×18"。極度利於在狹窄廊道或梯間轉角進行低迴轉半徑操作。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">外部把手</td><td style="padding: 8px;">4吋離地、8吋寬。確保穿戴消防手套時仍可抓握協作。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">編織帶材</td><td style="padding: 8px;">Kevlar 芳綸耐火織帶。抗火場極端高溫與尖銳物切割。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">視覺定位</td><td style="padding: 8px;">全體光致發光材質。全黑與煙霧瀰漫下提供光源引導。</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">前端幾何</td><td style="padding: 8px;">45度上揚斜角。滑過散落雜物，對抗翻滾。</td></tr>
        </table>
        <div class="quote-box" style="margin-top: 1rem; border-left: 4px solid #2563eb;">
            <p style="font-size: 0.95rem; margin: 0;"><strong>教官筆記：</strong>板體錐形設計與底部導軌是為了實現「機械利益」最大化執行。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.6rem; margin-bottom: 1.2rem;">7. 組件功能與 Reset 整備程序</h2>
        <div class="card" style="margin-bottom: 1.2rem;">
            <h4>核心拖曳與連結組件</h4>
            <ul style="font-size: 1.05rem; line-height: 1.5;">
                <li><strong>雙向拖拉系統：</strong>內建 24 呎結繩，每 12-15 吋設有結節。</li>
                <li><strong>雙口吊掛吊索 (Bridles)：</strong>紅色對接頭頂、藍色對接腿部。</li>
            </ul>
        </div>
        <h4 style="color: #b91c1c; margin-bottom: 0.8rem;">Ready-State Maintenance (最高整備程序)</h4>
        <div style="font-size: 1.1rem; line-height: 1.6;">
            <p>1. <strong>織帶內收：</strong>拉直織帶施以「小幅度捏擠」，平順塞入背板開口處。</p>
            <p>2. <strong>Tri-link 歸位：</strong>三角連結環平放後向上折入保護槽。</p>
            <p>3. <strong>鋼勾防震帶：</strong>扣環務必塞入專用魔鬼氈帶鎖定，防範碰撞噪音。</p>
        </div>
        <div class="quote-box" style="margin-top: 1.5rem; background: #fffbe9; border-left: 5px solid #f59e0b;">
            <p style="font-size: 1rem; margin: 0;"><strong>PRO TIP：</strong>整備度直接決定了 Mayday 引發當下的反應速度。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">8. RIT 核心戰技：打包與收納</h2>
        <p style="font-size: 1.1rem;">在伸手不見五指的地獄中，操作必須完全轉化為深層肌肉記憶。</p>
        <div class="card" style="border-left-color: #2563eb;">
            <h4>單人極速打包與「肢體收納」戰術</h4>
            <ol style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>高位放置法：</strong>背板初始放置位置應刻意高於受困者。</li>
                <li><strong>掃動翻轉 (The Sweep)：</strong>利用受困者 SCBA 氣瓶作為「傾斜支撐點」發力翻捲。</li>
                <li><strong>肢體安全收納 (Packaging Arms)：</strong>掃掠過受困者肘部，將手臂完全折納於板體內，排除掛礙風險。</li>
            </ol>
        </div>
        <h4 style="margin-top: 1.5rem;">固定系統之強度優先選擇</h4>
        <p style="font-size: 1.1rem; line-height: 1.5;">
            ● <strong>Lashing System 穿綁：</strong>必須呈交叉 X 型跨越肩部鎖定。<br>
            ● <strong>絕對連結點：</strong>務必優先扣接於<strong>核心三角環 (Tri-link)</strong>。
        </p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">9. 垂直與水平位移技術</h2>
        <h4 style="color: #b91c1c;">垂直 Lift-out (立體吊升) 隱形殺手防護</h4>
        <div class="card" style="font-size: 1.1rem;">
            <p><strong>Handle Wrap (把手繞繩死鎖)：</strong>主拖拉繩在連結受困者前，<strong style="color: #b91c1c;">必須強制先穿繞過 FASTboard 頂部把手</strong>一圈，防止壓力擠壓胸腔。</p>
        </div>
        <h4 style="margin-top: 1.5rem;">Pike and Pivot (矛與軸轉向) 操作邏輯</h4>
        <p style="font-size: 1.1rem; line-height: 1.6;">當立式升降背板抵達窗台邊緣時：</p>
        <ol style="font-size: 1.1rem; line-height: 1.6;">
            <li><strong>制動鎖定：</strong>暫停主施拉力，確保安全性。</li>
            <li><strong>切換機械利益 (MA)：</strong>拉力點移至下半部「藍色吊索段」。</li>
            <li><strong>創造軸心：</strong>由底端施以槓桿動力，進行 <strong>Pivot 平轉</strong> 進入室內。</li>
        </ol>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">10. 科技輔助搜索與撤退確保</h2>
        <h4>Cruant Autoroll V6 Max 搜索繩</h4>
        <p style="font-size: 1.1rem;">在漫天濃煙中，巔峰之位等於宣判死刑。</p>
        <ul style="font-size: 1.1rem; line-height: 1.6;">
            <li><strong>AutoRoll 邏輯：</strong>1.3M 的短距活動鎖定，最長 6M 深入延伸彈性。</li>
            <li><strong>實體絕對連結：</strong>末端使用 D 環死扣於帶隊官身上，杜絕脫隊。</li>
        </ul>
        <h4 style="margin-top: 1rem;">TIC 熱顯像「三點立體掃描法」</h4>
        <div class="card" style="font-size: 1.05rem; margin-bottom: 1rem; border-left: 5px solid #b91c1c;">
            <strong>1. 天花板區塊：</strong>掃描上方判斷火勢流動、熱層厚度、閃燃風險。<br>
            <strong>2. 中性帶與外牆窗戶：</strong>判斷最近逃生通道開口及換氣狀態。<br>
            <strong>3. 地面區間：</strong>穿透煙霧屏障定位受困者、提前避開地板塌陷。
        </div>
        <img src="assets/rit_tic_search.png" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">11. TIC 空間搜索決策流程卡</h2>
        <div class="mermaid" id="m1">
            graph TD
                A[啟動 TIC 空間掃描] --> B{環境能見度?}
                B -->|零能見度| C[切換超高感度模式]
                C --> E[360度立體環繞掃描]
                E --> F{捕捉到目標?}
                F -->|是| G[雷激光定位目標位址]
                G --> I[無線電回報]
                I --> K[導引救援組進入]
                classDef danger fill:#f88,stroke:#f00,stroke-width:2px,color:#fff;
                class G,I,K danger;
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">12. FASTboard 救援打包決策卡</h2>
        <div class="mermaid" id="m2">
            graph TD
                A[接觸受困消防員] --> B{姿勢判定?}
                B -->|臉朝下| C[掃動翻轉 The Sweep]
                B -->|臉朝上| D[由頭部高位套入]
                C --> E[肢體收納]
                D --> E
                E --> F[Lashing System 固定]
                F --> G{位移路徑?}
                G -->|水平| H[Tri-link 連接]
                G -->|垂直| I[Handle Wrap 繞繩]
                I --> J[連結紅色吊索]
                H --> K[防護撤出]
                J --> K
                classDef focus fill:#f96,stroke:#f60,stroke-width:2px;
                class C,E,I focus;
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">13. 定向搜索模式 Oriented Search</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">確保領航員永遠不離開基準地標，防範全組集體迷失。</p>
        <div class="card" style="background: #020617; color: #fff; padding: 1.2rem;">
            <ul style="line-height: 1.8; font-size: 1.05rem;">
                <li><strong>領航總機 (Oriented Member)：</strong>守住門口或搜索繩，維持絕對退路位址。</li>
                <li><strong>盲區搜索員 (Searcher)：</strong>以領航員為圓心，進入深處物理摸搜。</li>
                <li><strong>水線導航：</strong>順滑接突起，通向消防車 (Smooth Bump to the Pump)。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">14. 侷限空間：Denver Drill 極限突破</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">針對全副裝備開卡死在狹小走廊盡頭，需依靠高窗強拉出的技術。</p>
        <div class="card" style="border-left: 5px solid #2563eb;">
            <h4>兩人聯動協作</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>Lifter (內部推進)：</strong>半跪受困者腿間，以肩背頂住向上發力。</li>
                <li><strong>Puller (窗外接應)：</strong>跨坐窗框，抓住 SCBA 肩帶導引軌跡。</li>
            </ul>
        </div>
        <p style="font-size: 1rem; color: #b91c1c; font-weight: bold; margin-top: 1rem;">關鍵：將患者上半身前傾對摺 (Jackknife)，才不會撞上窗台。</p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">15. 樓板坍塌：Nance Drill 深井救援</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">專為洞口口徑極小，只能依靠一根繩子從地獄之口拔人的情境。</p>
        <div class="card">
            <h4>水帶轉軸與拉拔力學</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>Handcuff Knot (雙套結)：</strong>套入墜落者雙手臂至腋下鎖緊。</li>
                <li><strong>水帶轉軸：</strong>在孔口邊緣墊上充水水帶，作為低摩擦滑輪。</li>
                <li><strong>遠端平推：</strong>拉繩團隊在 3 公尺外安全區直線後退平拉。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">16. 緊急供氣：UAC 與 EBSS</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">RIT 小組必須在 zero 視覺下，20 秒內對接成功。</p>
        <div class="card" style="margin-bottom: 1rem;">
            <h4>UAC (高壓等值均壓)</h4>
            <p style="font-size: 1rem;">快速插上氣瓶氣瓶下方 UAC 接頭，瞬間完成均分壓力。</p>
        </div>
        <div class="card" style="background: #eff6ff; border-left: 5px solid #2563eb;">
            <h4>EBSS (低壓雙頭管串接)</h4>
            <p style="font-size: 1rem;">拔除受困者原廠接口，強行串接。即使氣瓶受損也能確保供氣連續。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">17. 終極人力拖拽：Webbing 與 Harness</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">在狹小民房中，扁帶 (Webbing) 是最好的救命神器。</p>
        <div class="card" style="margin-bottom: 1.2rem; border-left-color: #059669;">
            <h4>Webbing Chest Drag (胸腋拘束拖拉)</h4>
            <p style="font-size: 1rem;">環狀扁帶穿過腋下與肩帶下方，救援者跨於肩上像纖夫般側身掛著，使用腿部大肌肉發力後撤。</p>
        </div>
        <div class="card" style="border-left-color: #2563eb;">
            <h4>Shoulder Strap Drag (肩帶改裝)</h4>
            <p style="font-size: 1rem;">鬆開一側肩帶插扣，拉長後死鎖到對側腰部 D環，創造一體成型的人肉牽引把手。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">18. 絕殺突圍：牆面破壞與避難穿梭</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">當走廊被火封死，破牆是唯一的生路。</p>
        <div class="card" style="border-left: 5px solid #f59e0b;">
            <h4>Wall Breaching (盲鑿開洞)</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>暴力探牆：</strong>斧柄末端敲擊尋找石膏板空洞處。</li>
                <li><strong>戰術泳進 (Swim Through)：</strong>一臂伸出、一臂貼身，斜身鑽出木樁間隙，避免氣瓶卡死。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">19. 隱形捕鼠夾：電線纏繞與掙脫</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">消防員常被天花板掉落的各種電纜線活活「吊死」在地上。</p>
        <div class="card">
            <h4>自救三步程序</h4>
            <ol style="font-size: 1.1rem; line-height: 1.6;">
                <li><strong>Stop & Freeze：</strong>停止掙扎，避免氣瓶閥越咬越死。</li>
                <li><strong>Swim Backward：</strong>後退並仰泳大揮舞掃開蜘蛛網。</li>
                <li><strong>Cut & Clear：</strong>抽出胸前鋼絲剪，沿管線死角盲剪。</li>
            </ol>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">20. 命懸一線：梯上救援與自救滑降</h2>
        <div class="card" style="background: #020617; color: #fff;">
            <h4>高空搬運心法</h4>
            <p style="font-size: 1rem;">架梯對齊窗底設計正下方。將患者「面朝梯子」跨疊於接應者肩腿上，夾緊緩慢撤退。</p>
        </div>
        <div class="card" style="border-left: 5px solid #2563eb; margin-top: 1rem;">
            <h4>Window Bailout (緊急滑出)</h4>
            <p style="font-size: 1rem;">閃燃倒數時，雙手抓窗框貼附滑移至梯子立柱 (Rails)，雙手握柱一路溜到底。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">21. 安全掩護：水線防禦佈署</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">第一要務是全面性地掌控與隔離「撤退的生命路線」。</p>
        <div class="card">
            <h4>重裝水線防護 (Protective Line)</h4>
            <ul style="font-size: 1.1rem; line-height: 1.6;">
                <li>沿 RIT 進退路徑佈署 2.5 吋粗管水線。</li>
                <li>任務是噴霧壓制惡火屏障，<strong>絕對嚴禁轉身去滅火</strong>。</li>
                <li>沒有後路水線掩護，等於讓特攻小組一併送死。</li>
            </ul>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">22. 職安基石：耗氧監護與毒物除汙</h2>
        <div class="card" style="margin-bottom: 1.5rem;">
            <h4>高強度耗氧監測</h4>
            <p style="font-size: 1.1rem;">高強度下消耗可達 70-100 L/min。必須建立有意識的呼吸切分。</p>
        </div>
        <h4>現場深層除汙 (On-scene Decon)</h4>
        <p style="font-size: 1.1rem;">防護裝備極易附著毒物。任務離場後，必須立即使用專業洗劑刷洗全身，阻斷致癌物質滲透。</p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">23. 氣壓管理：1/3 規則與 N.U.C.</h2>
        <div class="card" style="border-left-color: #f59e0b;">
            <h4>生與死的 1/3 原則</h4>
            <ul style="font-size: 1rem; line-height: 1.8;">
                <li><strong>1/3 入室推進：</strong>直抵目標點。</li>
                <li><strong>1/3 工作作業：</strong>打包並護送撤出。</li>
                <li><strong>1/3 神聖預留：</strong>應對不可預見的延誤故障。</li>
            </ul>
        </div>
        <h4 style="color: #b91c1c; margin-top: 1.5rem;">NUC (Never Under Center)</h4>
        <p style="font-size: 1.1rem;">氣體量跌破半數即為紅線。一旦碰觸，不論進度如何，<strong>必須強制撤離</strong>。這是對隊友生命的最底線尊重。</p>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">24. 核心搜救縮寫心法</h2>
        <div class="card" style="margin-bottom: 1rem; border-left: 6px solid #b91c1c; background: #fff1f2;">
            <strong style="color: #b91c1c;">L.U.N.A.R. 宣告：</strong><br>
            位置/編隊/姓名/殘壓/所需資源。
        </div>
        <div class="card" style="margin-bottom: 1rem; border-left: 6px solid #2563eb; background: #eff6ff;">
            <strong style="color: #2563eb;">V.V.C.D. 濃煙讀判：</strong><br>
            體積/速度/顏色/密度。煙速快且色黑亮 ➔ 即將閃燃。
        </div>
        <div class="card" style="margin-bottom: 1rem; border-left: 6px solid #059669; background: #ecfdf5;">
            <strong style="color: #059669;">M.E.D.I.C. 危機調控：</strong><br>
            監測/評估/展開計畫/實施/持續通訊。
        </div>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2rem; color: #b91c1c;">25. A.W.A.R.E. 作業優先序</h2>
        <div class="mermaid" id="m3">
            graph TD
                A[接觸受受員] --> B(Air: 建立供氣)
                B --> C(Water: 建立防禦水線)
                C --> D(A Radio: 更換特勤頻道)
                D --> E(Radio: 回報IC情況)
                E --> F(Extrication: 最終搬運撤出)
                style B fill:#fee,stroke:#f44
                style C fill:#def,stroke:#38f
                style F fill:#dfd,stroke:#2c5
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">26. 絕境破繭 MAYDAY 自我脫困</h2>
        <div class="card">
            <h4>Swim Through (泳進戰術)</h4>
            <p style="font-size: 1rem;">雙手如游蛙式，從 SCBA 背背周圍實施<strong>向後撥開</strong>障礙物，壓低重心伏匐前鑽。</p>
        </div>
        <div class="card" style="margin-top: 1.5rem; border-left-color: #059669;">
            <h4>SCBA 部分脫卸轉移</h4>
            <p style="font-size: 1rem;">鬆開單側肩帶，將氣瓶由後背心旋轉至身下。<strong>禁忌：</strong>嚴禁拔除面罩扣環或扯開肺閥。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">27. 深空天梯：高樓層 RIT 作業</h2>
        <p style="font-size: 1.1rem; line-height: 1.6;">高樓層體力消耗呈暴力增長。派遣反應耗時是難以跨越的死神鴻溝。</p>
        <div class="card">
            <h4>Forward Staging (前進蹲點)</h4>
            <p style="font-size: 1rem;">RIT 必須提前推送到起火層「正下方」1-2 層。利用室內立管系統佈署水線。</p>
        </div>
        <div class="card" style="background: #fff1f2; margin-top: 1.5rem; border-left-color: #ef4444;">
            <p style="font-size: 1rem; color: #b91c1c; font-weight: bold;">禁令：</p>
            <p style="font-size: 1rem;">嚴禁搭乘未經消防特管的電梯。一旦卡在起火層，全隊集體殉職。</p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">28. 黑暗心智：心理素質管控</h2>
        <p style="font-size: 1.1rem;">恐慌是火場裡濃度最致命且無法防護的毒氣。</p>
        <div class="card" style="border-left: 5px solid #8b5cf6;">
            <h4>Box Breathing (方塊呼吸法)</h4>
            <p style="font-size: 1rem;">吸氣4秒、憋氣4秒、吐氣4秒、憋氣4秒。強迫大腦退出「棄甲逃逃模式」，平穩心跳，省下珍貴氧氣。</p>
        </div>
        <div class="quote-box" style="background: #020617; color: #fff;">
            <p style="font-size: 1rem;"><strong>「先掌控住你的恐懼心智，才能掌控好保命工具。」</strong></p>
        </div>
    </div>`,
    `<div class="page">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem; color: #b91c1c;">29. 百鍊千錘：肌肉無意識記憶</h2>
        <p style="font-size: 1.1rem;">地理環境消失，你只能依靠本能反射。</p>
        <div class="card">
            <h4>Blacked-out Mask (全黑蒙眼特訓)</h4>
            <ul style="font-size: 1rem;">
                <li>UAC 對接、打包作業：必須在 <strong>60 秒極限</strong> 盲操作完成。</li>
                <li>「Touch, Feel, Align & Connect」：用觸覺感建立 3D 方位空間。</li>
            </ul>
        </div>
        <p style="font-size: 1.15rem; font-weight: bold; text-align: center; color: #059669; padding: 1rem; border: 2px dashed #059669; margin-top: 1rem;">
            平時多流汗，戰時不留魂。
        </p>
    </div>`,
    `<div class="page centered">
        <h2 style="font-size: 2.2rem; color: #b91c1c;">30. 結語：從技術至生死承諾</h2>
        <p style="font-size: 1.2rem; margin-top: 1.5rem;">
            RIT 從不是昂貴器材的火力展示。而是保護消防員生存命脈的神長型命。
        </p>
        <div class="quote-box" style="background: #020617; color: #fff; width: 100%; padding: 2rem;">
            <p style="font-size: 1.4rem; font-weight: 900; margin: 0;">「我發誓必親手拉住底線，把學長帶回大門。」</p>
        </div>
        <p style="text-align: center; font-weight: 700; margin-top: 2rem;">新竹縣政府消防局 實作技術教官小組 敬製</p>
    </div>`,
    `<div class="page cover" style="padding: 0; background: #020617; display: flex; align-items: center; justify-content: center;">
        <div style="text-align: center; color: #fff;">
            <div style="width: 80px; height: 8px; background: var(--primary); margin: 0 auto 2rem;"></div>
            <h3 style="font-size: 2rem; font-weight: 900; letter-spacing: 4px;">安全歸隊，唯一的歸途。</h3>
            <p style="color: #94a3b8; font-size: 1.1rem; letter-spacing: 2px;">HSCHB Tactical v2.0</p>
        </div>
    </div>`
];

const TOTAL_PAGES = ISO_CONTENT.length;

const ISO_APP = {
    flipBook: null,
    isMobile: false,
    isFlipping: false,
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
            this.isFlipping = true;
            setTimeout(() => { this.isFlipping = false; }, this.isMobile ? 450 : 850);
        });

        const safeFlip = (dir) => {
            if (this.isFlipping) return;
            
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