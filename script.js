const questions = ["憲法第26条：全ての国民は、(1)により、その能力に多じて、(2)権利を有する。",
  "憲法第26条：全ての国民は、(1)により、その能力に多じて、(2)権利を有する。",
  "第2項：全ての国民は、法律の定めるところにより、その保護する子女の(3)を受けさせる(4)。(5)は、これを無償とする。",
  "第2項：全ての国民は、法律の定めるところにより、その保護する子女の(3)を受けさせる(4)。(5)は、これを無償とする。",
  "第2項：全ての国民は、法律の定めるところにより、その保護する子女の(3)を受けさせる(4)。(5)は、これを無償とする。",
  "子どもに対する保護者の義務はおおよそ何歳まで？",
  "子どもに対する国の義務の対象にある子どもをなんと呼ぶ",
  "子どもに対する国の義務の対象にある子どもは何歳から何歳",
  "教育基本法：他の教育法令に対して(9)を持つ。",
  "教育基本法：後法優先の原則の受けない。つまり、(10)(上位法)を有する。",
  "教育基本法が発布されたのはいつ",
  "学校教育法が発布されたのはいつ",
  "社会教育法が発布されたのはいつ",
  "教育委員会法が発布されたのはいつ",
  "教育基本法、学校教育法、社会教育法、教育委員会法、の中で最もより効力の大きいものはどれか",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "学校教育法に規定された「学校」の名称について、以下の空欄となっている箇所に適語を埋めなさい。・幼稚園・小学校・中学校・①・中等教育学校・特別支援学校・大学・高等学校・②　①：小中学を合わせたもの",
  "学校教育法に規定された「学校」の名称について、以下の空欄となっている箇所に適語を埋めなさい。・幼稚園・小学校・中学校・①・中等教育学校・特別支援学校・大学・高等学校・②　②：高等学校と短期大学を合わせたもの",
  "学校教育法における「学校」は学校教育法の第何条に規定されているか、数字で答えなさい。",
  "教育基本法第6条に規定される「法律に定める学校」について、学校教育法以外の法律に基づいて設置される「学校」の正式名称を答えなさい。",
  "我が国において就学前教育を行う「学校」の名称を答えなさい。",
  "我が国において後期中等教育を行う「学校」の名称を答えなさい。",
  "保育所の設置や運営に関する事項を規定している法律の名称を答えなさい。",
  "高等学校は、中学校における教育の基礎の上に、心身の発達及び進路に応じて、高度な⑧及び⑨を施すことを目的とする。⑧：を答えなさい。",
  "高等学校は、中学校における教育の基礎の上に、心身の発達及び進路に応じて、高度な⑧及び⑨を施すことを目的とする。⑨：を答えなさい。",
  "病弱、発育不完全その他やむを得ない事由のため、就学困難と認められる者の保護者に対しては、市町村の教育委員会は、文部科学大臣の定めるところにより、第2項（就学）の義務を「①又は免除することができる。",
  "地方公共団体が設置する教育委員会の制度や職務等を死刑した法律の正式名称を答えなさい",
  "聞き２府４県ないにある、政令指定都市の名称をすべて答えなさい。",
  "文部科学省の外で、2023年に京都市に移転した庁の名称を答えなさい",
  "中央教育審議会は、重要政策や施策の立案に際して、④から諮問を受けた事項について調査、審議を行う有識者会議であり、審議のまとめとして提出される⑤は、国による政策決定の参考にされ、教育行政に強く反映されることとなる。※ 空欄④には同じ語が入る。④について答えなさい",
  "中央教育審議会は、重要政策や施策の立案に際して、④から諮問を受けた事項について調査、審議を行う有識者会議であり、審議のまとめとして提出される⑤は、国による政策決定の参考にされ、教育行政に強く反映されることとなる。※ 空欄④には同じ語が入る。⑤について答えなさい",
  "教育委員会全体を統括し、教育行政の執行にすべての責任を負う者の職名を答えなさい。",
  "教育委員の任期の年数を数字で答えなさい。",
  "教育委員会事務局に所属し、学校教育に関する専門的事項の指導に関する事務を行う職員の職名を答えなさい。",
  "教育委員会が行政委員会として組織されていることの趣旨として、⑨(6文字）の確保、継続性・安定性の確保、地域住民の意向反映などがあげられる。",
  "首長部局と教育委員会が教育行政に関する連絡調整を図るために開催され、首長が招集する会議の名称を答えなさい。",
  "「全ての公務員は、①の奉仕者であって、一部の奉仕者ではない」①に入る適切な言葉は？",
  "公立学校教員の職務上の義務のうち”仕事に従事することを宣誓する義務”を何という",
  "公立学校教員の職務上の義務のうち”法や上から言われたことに従う義務”を何という",
  "公立学校教員の職務上の義務のうち”担当している仕事に集中する義務”を何という",
  "公立学校教員が義務として、「信用を傷つける・不名誉をなる行為」を禁止しているが、このことを何という",
  "公立学校教員が義務として、「信用を傷つける・不名誉をなる行為」を禁止しているが、このことを規定している法律は何",
  "公立学校教員は一定の条件を満たすと兼職・兼業が可能となるが、これを規定している法律は何",
  "新規採用の公立教員の条件付き人気は何年間",
  "公立学校教員に対して超過勤務を命じられる事項を4つ挙げろ",
  "長時間労働が問題となる原因の公立の義務教育学校等の教員の給与等に関する特別処置の規定について簡潔に答えなさい（30字ていど）",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",];
const answers = ["法律の定めるところ",
  "教育を受ける",
  "普通教育",
  "義務を負ふ",
  "義務教育",
  "18",
  "学齢児童・生徒",
  "15",
  "準憲法的性格",
  "1947",
  "1947",
  "1949",
  "1948",
  "教育基本法",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "義務教育学校",
  "高等専門学校",
  "1",
  "幼保連携型認定こども園",
  "幼稚園",
  "高等学校",
  "児童福祉法",
  "普通教育",
  "専門教育",
  "猶予",
  "地方教育行政の組織及び運営に関する法律",
  "大阪市、堺市、京都市、神戸市",
  "文化庁",
  "文部科学大臣",
  "答申",
  "教育長",
  "4",
  "指導主事",
  "政治的中立",
  "総合教育会議",
  "全体",
  "服務の専念",
  "法令及び上司の職務上の命令に従う義務",
  "職務に専念する義務",
  "信用失墜行為の禁止",
  "地方公務員法",
  "教育公務員特例法",
  "1",
  "実習・学校行事・非常災害時・教員会議",
  "超過手当が支給されないが教職調整手当が一律に支給される",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",];

let range = [], current = 0, correct = 0, mistakes = [];

function startQuiz() {
  const start = parseInt(document.getElementById('start').value, 10) - 1;
  const end = parseInt(document.getElementById('end').value, 10) - 1;
  const mode = document.getElementById('mode').value;

  range = [];
  for (let i = start; i <= end; i++) range.push(i);
  if (mode === 'random') range = shuffle(range);

  current = 0;
  correct = 0;
  mistakes = [];

  document.getElementById('settings').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  if (current < range.length) {
    document.getElementById('question').textContent = questions[range[current]];
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
  } else {
    showResults();
  }
}

function submitAnswer() {
  const input = document.getElementById('answer').value.trim();
  const correctAns = answers[range[current]];
  const feedback = document.getElementById('feedback');

  if (input === correctAns) {
    feedback.textContent = '正解！';
    correct++;
  } else {
    feedback.textContent = `不正解：正答は「${correctAns}」です。`;
    mistakes.push(range[current]);
  }

  current++;
  setTimeout(showQuestion, 1000);
}

function endQuiz() {
  showResults();
}

function showResults() {
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('summary').textContent = `全${range.length}問中、${range.length - mistakes.length}問正解、${mistakes.length}問間違えました。`;

  const mArea = document.getElementById('mistakes');
  if (mistakes.length === 0) {
    mArea.innerHTML = '<p>全問正解！おめでとうございます！</p>';
  } else {
    const ul = document.createElement('ul');
    mistakes.forEach(idx => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Q：</strong> ${questions[idx]}<br><strong>A：</strong> ${answers[idx]}`;
      ul.appendChild(li);
    });
    mArea.innerHTML = '';
    mArea.appendChild(ul);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
