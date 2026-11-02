// standings-data.js

// 1. จำลองข้อมูล JSON ที่ดึงมาจาก API (ฐานข้อมูลตารางคะแนน)
const apiStandingsData = [
    { rank: 1, tag: "PRX", name: "Paper Rex", badge: "bg-danger", played: 16, won: 14, lost: 2, diff: "+18", diffColor: "text-success", form: ["W", "W", "W", "L", "W"] },
    { rank: 2, tag: "GEN", name: "Gen.G Esports", badge: "bg-warning text-dark", played: 16, won: 13, lost: 3, diff: "+14", diffColor: "text-success", form: ["L", "W", "W", "W", "W"] },
    { rank: 3, tag: "DRX", name: "DRX", badge: "bg-primary", played: 16, won: 11, lost: 5, diff: "+8", diffColor: "text-success", form: ["W", "L", "W", "W", "L"] },
    { rank: 4, tag: "T1", name: "T1", badge: "bg-secondary", played: 16, won: 9, lost: 7, diff: "+2", diffColor: "text-success", form: ["W", "W", "L", "L", "W"] },
    { rank: 5, tag: "TS", name: "Team Secret", badge: "bg-dark border border-secondary", played: 16, won: 8, lost: 8, diff: "0", diffColor: "text-secondary", form: ["L", "L", "W", "L", "W"] },
    { rank: 6, tag: "RRQ", name: "Rex Regum Qeon", badge: "bg-info text-dark", played: 16, won: 6, lost: 10, diff: "-4", diffColor: "text-danger", form: ["W", "L", "L", "W", "L"] }
];

// 2. ฟังก์ชันนำข้อมูลมาสร้างแถวในตาราง (Render Table)
function loadStandings() {
    const tbody = document.getElementById("standings-body");
    if (!tbody) return;

    tbody.innerHTML = ""; // ล้างค่าเดิมก่อน

    apiStandingsData.forEach(team => {
        // สร้างป้าย Form (W/L) อัตโนมัติ
        let formBadges = team.form.map(result => {
            const colorClass = result === "W" ? "bg-success" : "bg-danger";
            return `<span class="badge ${colorClass} me-1">${result}</span>`;
        }).join("");

        // กำหนดสีตัวเลขอันดับ (ที่ 1 สีทอง, ที่ 2 สีเงิน, ที่ 3 สีทองแดง)
        let rankColor = "";
        let rowClass = "";
        if (team.rank === 1) { rankColor = "text-warning"; rowClass = "table-active"; }
        else if (team.rank === 2) { rankColor = "text-secondary"; }
        else if (team.rank === 3) { rankColor = "text-info"; }

        // สร้าง HTML แถวข้อมูล
        const tr = document.createElement("tr");
        tr.className = rowClass;
        tr.innerHTML = `
            <td class="fw-bold fs-5 ${rankColor}">${team.rank}</td>
            <td class="text-start">
                <span class="badge ${team.badge} me-2">${team.tag}</span> 
                <strong class="text-white">${team.name}</strong>
            </td>
            <td>${team.played}</td>
            <td class="text-success fw-bold">${team.won}</td>
            <td class="text-danger">${team.lost}</td>
            <td class="${team.diffColor}">${team.diff}</td>
            <td>${formBadges}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

// 3. สั่งให้ทำงานทันทีเมื่อเปิดหน้าเว็บ
document.addEventListener("DOMContentLoaded", loadStandings);