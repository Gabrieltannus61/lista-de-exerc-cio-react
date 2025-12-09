import React, { useState } from 'react';
import './App.css'

function CharacterPanel({
  name, setName, race, setRace, charClass, setCharClass,
  statusOpen, setStatusOpen
}) {
  return (
    <div className="component-box">
      <h2 className="panel-header">Painel do Herói</h2>
      
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome do herói"
        />
      </div>
      
      <div className="form-group">
        <label>Raça:</label>
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          <option>Humano</option>
          <option>Elfo</option>
          <option>Anão</option>
          <option>Orc</option>
          <option>Cachorro</option>
          <option>Sereia</option>
        </select>
      </div>

      <div className="form-group">
        <label>Classe:</label>
        <select value={charClass} onChange={(e) => setCharClass(e.target.value)}>
          <option>Guerreiro</option>
          <option>Mago</option>
          <option>Arqueiro</option>
          <option>Ladino</option>
          <option>Bardo</option>
          <option>Caçador</option>
          <option>Titã</option>
          <option>Arcano</option>
          <option>Druida de fogo </option>
          <option>Druida da natureza </option>
          <option>Druida de vento </option>
        </select>
      </div>

      <button
        onClick={() => setStatusOpen(!statusOpen)}
        className="button button-purple button-full"
      >
        {statusOpen ? 'Esconder Efeitos' : 'Mostrar Efeitos'}
      </button>

      {statusOpen && (
        <div className="status-box">
          <h4>Efeitos Ativos:</h4>
          <ul>
            <li>Benção de Força (+2 FOR)</li>
            <li>Envenenado (-1 HP/turno)</li>
          </ul>
        </div>
      )}
    </div>
  );
}

function StatsBars({ hp, maxHp, xp, levelXp, level, gold }) {
  
  const hpPercentage = (hp / maxHp) * 100;
  
  const hpColorClass = hpPercentage > 70 ? 'hp-green'
                     : hpPercentage > 30 ? 'hp-yellow'
                     : 'hp-red';

  const hpBlinkClass = hpPercentage < 10 ? 'blink' : '';

  const xpPercentage = (xp % levelXp) / levelXp * 100;

  return (
    <div className="component-box stats-bars">
      { }
      <div>
        <div className="stat-label">
          <span>❤️ Vida</span>
          <span>{hp} / {maxHp}</span>
        </div>
        <div className="stat-bar-container">
          <div
            className={`stat-bar ${hpColorClass} ${hpBlinkClass}`}
            style={{ width: `${hpPercentage}%` }}
          ></div>
        </div>
      </div>

      {}
      <div>
        <div className="stat-label">
          <span>✨ XP (Nível {level})</span>
          <span>{xp % levelXp} / {levelXp}</span>
        </div>
        <div className="stat-bar-container">
          <div
            className="stat-bar xp-bar"
            style={{ width: `${xpPercentage}%` }}
          ></div>
        </div>
      </div>

      {}
      <div>
        <span className="gold-text">💰 Ouro: {gold}</span>
      </div>
    </div>
  );
}

function AdventureControls({ onHeal, onDamage, onGainXp }) {
  return (
    <div className="component-box">
      <h3>Ações</h3>
      <div className="button-grid">
        <button
          onClick={() => onHeal(10)}
          className="button button-green"
        >
          Curar (+10 HP)
        </button>
        <button
          onClick={() => onDamage(15)}
          className="button button-red"
        >
          Dano (-15 HP)
        </button>
        <button
          onClick={() => onGainXp(50)}
          className="button button-blue"
        >
          Inimigo (+50 XP)
        </button>
        <button
          onClick={() => onGainXp(100)}
          className="button button-blue-dark"
        >
          Missão (+100 XP)
        </button>
      </div>
    </div>
  );
}

function AttributePanel({ points, attributes, onSetAttribute }) {
  
  const handleChange = (attr, delta) => {
    if (delta > 0 && points > 0) { 
      onSetAttribute(attr, attributes[attr] + 1, points - 1);
    } else if (delta < 0 && attributes[attr] > 0) { 
      onSetAttribute(attr, attributes[attr] - 1, points + 1);
    }
  };

  return (
    <div className="component-box">
      <h3>Atributos</h3>
      <p className="attribute-points">Pontos: {points}</p>
      
      <div className="attributes-list">
        {Object.entries(attributes).map(([key, value]) => (
          <div key={key} className="attribute-item">
            <span className="attribute-name">{key}</span>
            <div className="attribute-controls">
              <button
                onClick={() => handleChange(key, -1)}
                disabled={value <= 0}
                className="button button-red"
              >
                -
              </button>
              <span className="attribute-value">{value}</span>
              <button
                onClick={() => handleChange(key, 1)}
                disabled={points <= 0}
                className="button button-green"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Inventory({ items, isOpen, setIsOpen }) {
  return (
    <div className="component-box">
      <div className="component-header">
        <h3>Inventário</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="button button-gray"
        >
          {isOpen ? 'Fechar 🎒' : 'Abrir 🛍️'}
        </button>
      </div>

      {isOpen && (
        <ul className="list-container">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              - {item}
            </li>
          ))}
          {items.length === 0 && <li className="list-item list-item-italic">Mochila vazia...</li>}
        </ul>
      )}
    </div>
  );
}

function Shop({ gold, onBuyItem, isOpen, setIsOpen }) {
  const shopItems = [
    { name: 'Poção de Vida', cost: 15 },
    { name: 'Mapa da Floresta', cost: 25 },
    { name: 'Espada de Ferro', cost: 50 },
  ];

  return (
    <div className="component-box">
      <div className="component-header">
        <h3>Loja</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="button button-gray"
        >
          {isOpen ? 'Sair da Loja' : 'Entrar na Loja'}
        </button>
      </div>

      {isOpen && (
        <div className="shop-container">
          <p>Seu Ouro: {gold} 💰</p>
          {shopItems.map((item) => (
            <div key={item.name} className="shop-item">
              <span>{item.name}</span>
              <button
                onClick={() => onBuyItem(item.name, item.cost)}
                disabled={gold < item.cost}
                className="button button-green"
              >
                Comprar ({item.cost} Ouro)
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function QuestJournal({ quests, setQuests, onCompleteQuest }) {
  const [newQuestText, setNewQuestText] = useState('');

  const addQuest = () => {
    if (newQuestText.trim()) {
      const newQuest = {
        id: Date.now(),
        text: newQuestText,
        completed: false
      };
      setQuests([...quests, newQuest]);
      setNewQuestText('');
    }
  };

  const completeQuest = (id) => {
    setQuests(quests.map(q => q.id === id ? { ...q, completed: true } : q));
    onCompleteQuest(); 
  };

  const activeQuests = quests.filter(q => !q.completed);
  const completedQuests = quests.filter(q => q.completed);

  return (
    <div className="component-box">
      <h3>Diário de Missões</h3>
      
      <div className="quest-form">
        <input
          type="text"
          value={newQuestText}
          onChange={(e) => setNewQuestText(e.target.value)}
          placeholder="Nova missão..."
        />
        <button
          onClick={addQuest}
          className="button button-blue"
        >
          +
        </button>
      </div>

      <h4 className="quest-subtitle">Ativas:</h4>
      <ul className="list-container quest-list">
        {activeQuests.map(quest => (
          <li key={quest.id} className="list-item">
            <span>{quest.text}</span>
            <button
              onClick={() => completeQuest(quest.id)}
              className="button button-green quest-complete-button"
            >
              ✓
            </button>
          </li>
        ))}
        {activeQuests.length === 0 && <li className="list-item list-item-italic">Nenhuma missão ativa.</li>}
      </ul>

      <h4 className="quest-subtitle">Completas ({completedQuests.length}):</h4>
      <ul className="list-container">
        {completedQuests.map(quest => (
          <li key={quest.id} className="list-item-completed">
            {quest.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EnchantmentGenerator() {
  const [baseWord, setBaseWord] = useState('');

  let enchantedWord = '...';
  if (baseWord) {
    enchantedWord = baseWord.split('').reverse().join('') + 'is';
  }

  return (
    <div className="component-box">
      <h3>Gerador de Encantamentos ✨</h3>
      <input
        type="text"
        value={baseWord}
        onChange={(e) => setBaseWord(e.target.value)}
        placeholder="Palavra mágica base"
      />
      <div className="enchantment-output">
        <span>Seu encantamento:</span>
        <p>{enchantedWord}</p>
      </div>
    </div>
  );
}

function PartyRanking({ party, setParty }) {
  const [newName, setNewName] = useState('');
  const [newClass, setNewClass] = useState('Guerreiro');
  const [newLevel, setNewLevel] = useState(1); 

  const addMember = () => {
    if (newName.trim()) {
      const newMember = {
        id: Date.now(),
        name: newName,
        class: newClass,
        level: parseInt(newLevel) || 1
      };
      setParty([...party, newMember]);
      setNewName('');
      setNewLevel(1);
    }
  };

  const changeLevel = (id, delta) => {
    setParty(party.map(m =>
      m.id === id ? { ...m, level: Math.max(1, m.level + delta) } : m
    ));
  };

  const uniqueParty = [];
  const seenIds = new Set();
  party.forEach((member, index) => {
    let id = member.id;
    while (seenIds.has(id)) {
      id = Date.now() + index; 
    }
    seenIds.add(id);
    uniqueParty.push({ ...member, id });
  });

  const sortedParty = [...uniqueParty].sort((a, b) => b.level - a.level);

  return (
    <div className="component-box">
      <h3>Ranking da Party</h3>
      
      <div className="party-form">
        <input type="text" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Nome" />
        <select value={newClass} onChange={e => setNewClass(e.target.value)}>
          <option>Guerreiro</option>
          <option>Mago</option>
          <option>Arqueiro</option>
        </select>
        <input type="number" value={newLevel} onChange={e => setNewLevel(e.target.value)} placeholder="Nível" />
        <button onClick={addMember} className="button button-green">Adicionar</button>
      </div>

      <ol className="list-container">
        {sortedParty.map((member, index) => (
          <li key={member.id} className="list-item list-item-party clearfix">
            <div>
              <span className="party-rank">{member.name}</span>
              <span className="party-details"> ({member.class} - Nv. {member.level})</span>
            </div>
            <div className="party-controls">
              <button onClick={() => changeLevel(member.id, -1)} className="button button-red">-</button>
              <button onClick={() => changeLevel(member.id, 1)} className="button button-green">+</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}


export default function App() {
  const [hp, setHp] = useState(100);
  const [xp, setXp] = useState(0);
  const [gold, setGold] = useState(50);
  const [characterName, setCharacterName] = useState('Aventureiro');
  const [characterRace, setCharacterRace] = useState('Humano');
  const [characterClass, setCharacterClass] = useState('Guerreiro');
  const [attributePoints, setAttributePoints] = useState(10);
  const [attributes, setAttributes] = useState({
    força: 0,
    resistência: 0,
    inteligência: 0,
    sorte: 0,
  });

  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const [inventory, setInventory] = useState(['Poção de Vida Pequena', 'Mapa Amassado', 'Espada Curta']);
  const [quests, setQuests] = useState([
    { id: 1, text: 'Falar com o Ferreiro', completed: true },
    { id: 2, text: 'Derrotar 5 Lindesays (5 cachorros) ', completed: false },
  ]);
  const [party, setParty] = useState([
    { id: 1, name: 'Micha', class: 'Bardo', level: 5 },
    { id: 2, name: 'Caiox', class: 'Ladino', level: 7 },
    { id: 3, name: 'Lindesay', class: 'Cachorro', level: -1 },
    { id: 4, name: 'Joé', class: 'Druida de Fogo', level: 4 },
  ]);

  
  const levelXp = 300;
  const level = Math.floor(xp / levelXp) + 1;
  const maxHp = 100 + (attributes.resistência * 5);

  const handleHeal = (amount) => {
    setHp(currentHp => Math.min(currentHp + amount, maxHp));
  };
  const handleDamage = (amount) => {
    setHp(currentHp => Math.max(currentHp - amount, 0));
  };
  const handleGainXp = (amount) => {
    setXp(currentXp => currentXp + amount);
  };
  
  const handleSetAttribute = (attr, value, newPoints) => {
    setAttributes(currentAttrs => ({
      ...currentAttrs,
      [attr]: value
    }));
    setAttributePoints(newPoints);
    
    if (attr === 'resistência') {
      const newMaxHp = 100 + (value * 5);
      setHp(currentHp => Math.min(currentHp, newMaxHp)); 
    }
  };

  const handleBuyItem = (itemName, cost) => {
    if (gold >= cost) {
      setGold(currentGold => currentGold - cost);
      setInventory(currentInv => [...currentInv, itemName]);
      setShopOpen(false);
      setInventoryOpen(true);
    }
  };

  const handleCompleteQuest = () => {
    handleGainXp(100);
    setGold(g => g + 25);
  };
  
  return (
    
    <div className="app-container">
      <h1>
        Aventura de: {characterName}
      </h1>

      <div className="app-layout clearfix">
        
        <div className="column-left">
          <CharacterPanel
            name={characterName} setName={setCharacterName}
            race={characterRace} setRace={setCharacterRace}
            charClass={characterClass} setCharClass={setCharacterClass}
            statusOpen={statusOpen} setStatusOpen={setStatusOpen}
          />
          <StatsBars
            hp={hp} maxHp={maxHp}
            xp={xp} levelXp={levelXp} level={level}
            gold={gold}
          />
          <AdventureControls
            onHeal={handleHeal}
            onDamage={handleDamage}
            onGainXp={handleGainXp}
          />
          <AttributePanel
            points={attributePoints}
            attributes={attributes}
            onSetAttribute={handleSetAttribute}
          />
        </div>

        <div className="column-right">
          <div className="column-grid-2">
            <Inventory
              items={inventory}
              isOpen={inventoryOpen}
              setIsOpen={setInventoryOpen}
            />
            <Shop
              gold={gold}
              onBuyItem={handleBuyItem}
              isOpen={shopOpen}
              setIsOpen={setShopOpen}
            />
          </div>
          <QuestJournal
            quests={quests}
            setQuests={setQuests}
            onCompleteQuest={handleCompleteQuest}
          />
          <PartyRanking
            party={party}
            setParty={setParty}
          />
          <EnchantmentGenerator />
        </div>
      </div>
    </div>
  );
}