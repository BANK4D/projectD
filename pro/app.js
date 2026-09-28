// app.js - Real-time Score Simulator & Web Notification Service

document.addEventListener("DOMContentLoaded", () => {
    checkNotificationPermission();
    startRealtimeScorePolling();
});

// ตรวจสอบสิทธิ์การแจ้งเตือน
function checkNotificationPermission() {
    const banner = document.getElementById("noti-banner");
    const notiBtn = document.getElementById("btn-request-noti");

    if (!("Notification" in window)) {
        if (notiBtn) notiBtn.style.display = "none";
        return;
    }

    if (Notification.permission === "default") {
        if (banner) banner.classList.remove("d-none");
    } else if (Notification.permission === "granted") {
        if (notiBtn) {
            notiBtn.classList.replace("btn-outline-danger", "btn-dark");
            notiBtn.innerHTML = '<i class="bi bi-bell-slash text-success"></i> เปิดแจ้งเตือนแล้ว';
            notiBtn.disabled = true;
        }
    }
}

// ขอสิทธิ์จากผู้ใช้งาน (Web Notification API)
function enableNotification() {
    if (!("Notification" in window)) {
        alert("เบราว์เซอร์นี้ไม่รองรับระบบ Web Notification");
        return;
    }

    Notification.requestPermission().then((permission) => {
        dismissBanner();
        if (permission === "granted") {
            new Notification("VCT LIVE HUB - เปิดการแจ้งเตือนสำเร็จ!", {
                body: "คุณจะได้รับการแจ้งเตือนผลการแข่งขันสดและเวลาเริ่มแข่งทันที",
                icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200"
            });
            checkNotificationPermission();
        }
    });
}

function dismissBanner() {
    const banner = document.getElementById("noti-banner");
    if (banner) banner.classList.add("d-none");
}

// ผูกปุ่มจาก Navbar
const notiBtn = document.getElementById("btn-request-noti");
if (notiBtn) {
    notiBtn.addEventListener("click", enableNotification);
}

// ฟังก์ชันตั้งเตือนคู่แข่งขันที่กำลังจะมาถึง
function scheduleNotification(matchName, timeString) {
    if (!("Notification" in window)) {
        alert("เบราว์เซอร์ของคุณไม่รองรับการแจ้งเตือน");
        return;
    }

    if (Notification.permission === "default") {
        Notification.requestPermission().then((perm) => {
            if (perm === "granted") {
                triggerMatchAlert(matchName, timeString);
            }
        });
    } else if (Notification.permission === "granted") {
        triggerMatchAlert(matchName, timeString);
    } else {
        alert("กรุณาเปิดสิทธิ์การแจ้งเตือนในตั้งค่าเบราว์เซอร์เพื่อรับการแจ้งเตือนคู่แข่งนี้");
    }
}

function triggerMatchAlert(matchName, timeString) {
    alert(`บันทึกการแจ้งเตือนสำหรับคู่ ${matchName} (${timeString}) เรียบร้อยแล้ว!`);
    
    // จำลองส่ง Notification แจ้งเตือนตัวอย่างทันที
    setTimeout(() => {
        new Notification(`การแข่งขันใกล้เริ่มต้น! [${matchName}]`, {
            body: `คู่เดือด ${matchName} มีกำหนดการแข่งขันเวลา ${timeString} กรุณาเตรียมรับชมถ่ายทอดสด`,
            icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200"
        });
    }, 2500);
}

// การจำลองผล Real-time Polling ทุก 6 วินาที
function startRealtimeScorePolling() {
    const scoreElem = document.getElementById("live-score");
    const roundElem = document.getElementById("live-round-info");
    const tickerScore = document.getElementById("ticker-score");

    let prxRound = 10;
    let genRound = 8;

    setInterval(() => {
        if (!scoreElem || !roundElem) return;

        // สุ่มเพิ่มคะแนนเพื่อจำลอง Live Match
        if (prxRound < 13 && genRound < 13) {
            if (Math.random() > 0.5) {
                prxRound++;
            } else {
                genRound++;
            }

            const currentStatus = `PRX ${prxRound} : ${genRound} GEN (สด - รอบที่ ${prxRound + genRound})`;
            roundElem.textContent = currentStatus;
            if (tickerScore) {
                tickerScore.textContent = `(Map 2: Sunset | PRX ${prxRound} - ${genRound} GEN)`;
            }

            // เมื่อจบเกม ส่งการแจ้งเตือนผลสรุป
            if (prxRound === 13 || genRound === 13) {
                const winner = prxRound === 13 ? "Paper Rex" : "Gen.G";
                roundElem.textContent = `จบการแข่งขันใน Map 2: ${winner} ได้รับชัยชนะ!`;
                if (Notification.permission === "granted") {
                    new Notification("ผลการแข่งขันล่าสุด!", {
                        body: `${winner} ปิดเกมในแผนที่ที่ 2 ด้วยสกอร์ ${prxRound} - ${genRound}`,
                        icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200"
                    });
                }
            }
        }
    }, 6000);
}