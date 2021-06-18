/* global CONFIG */

/**
 * 显示一句话
 * @param {string} content
 * @param {string} author
 * @param {string} from
 */
function say(content, author, from) {
  document.querySelector("#say-content").innerText = content;
  if (author) {
    document.querySelector("#say-author").innerText = author;
  }
  if (from) {
    document.querySelector("#say-from").innerText = "「" + from + "」";
  }
}

/**
 * 获取在线 API
 */
function fetchApiToSay() {
  if (CONFIG.say.api) {
    fetch(CONFIG.say.api)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
			  say(data.hitokoto, data.from_who, data.from);
           
            }
          });
        } else {
          throw new Error(
            CONFIG.say.api + ", HTTP error, status = " + res.status
          );
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
}
